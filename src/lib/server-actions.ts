import { z } from 'zod';
import { auth } from '@/auth';
import { getFormDataEntries } from '@/lib/util';
import { BaseFormState } from "@/types";

type ServerActionResult = { error?: string; message?: string; success?: boolean } | Record<string, string[]>;
type ServerActionFunction<T> = (data: T) => Promise<ServerActionResult>;

interface BuilderOptions<T extends z.ZodRawShape> {
    schema: z.ZodObject<T>;
    action: ServerActionFunction<z.infer<z.ZodObject<T>>>;
    authenticated?: boolean;
}

export function createSafeServerAction<T extends z.ZodRawShape>({
    schema,
    action,
    authenticated = false,
}: BuilderOptions<T>) {
    return async (
        prevState: BaseFormState,
        formData: FormData
    ): Promise<ServerActionResult> => {

        // Authentication check
        if (authenticated) {
            const session = await auth();
            if (!session) return { message: 'Unauthorized', success: false };
        }

        // Schema validation
        const validationResult = schema.safeParse(getFormDataEntries(formData));
        if (!validationResult.success) {
            return validationResult.error.formErrors.fieldErrors
        }

        try {
            // Execute the original action
            return await action(validationResult.data);
        } catch (error) {
            console.error(error);
            return { error: 'An error occurred while executing the action' };
        }
    };
}

'use server';

import {object, string, ZodError} from "zod";
import settings, { Code } from "@/lib/settings";
import {BaseFormState} from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";
import {getFormDataEntries} from "@/lib/util";

const settingsSchema = object({
    theme: string({required_error: 'Theme is required'}).optional(),
});

export default async function saveSettings(prevState: BaseFormState, formData: FormData) {
    const entries = getFormDataEntries(formData) as Record<string, string|null>;

    try {
        // Validate entries
        settingsSchema.parse(entries);

        // Save settings
        await settings.saveMultiple(entries)
    } catch (error) {
        if (error instanceof ZodError) {
            return error.formErrors.fieldErrors
        }

        return {
            message: 'An error occurred',
            success: false
        }
    }

    //we revalidate everything when settings are saved
    revalidatePath('/', 'layout')
    revalidateTag('pterodactyl')

    return {
        message: 'Settings saved',
        success: true
    }
}

export async function getSettings(): Promise<Record<Code, string|null>>{
    return await settings.getAll();
}
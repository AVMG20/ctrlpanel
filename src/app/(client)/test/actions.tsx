type FormState = {
    message: string;
};

import {revalidatePath} from "next/cache";
let messages = [];

export const createMessage = async (
    formState: FormState,
    formData: FormData
) => {
    await new Promise((resolve) => setTimeout(resolve, 250));

    const text = formData.get('text') as string;

    messages.push({
        id: crypto.randomUUID(),
        text,
    });

    return {
        message: crypto.randomUUID(),
    };
};
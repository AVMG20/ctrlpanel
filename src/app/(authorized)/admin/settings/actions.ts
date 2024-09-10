'use server';

import {object, string, ZodString, ZodError} from "zod";
import settings from "@/lib/settings";
import {BaseFormState} from "@/types";

const settingsSchema = object({
    theme: string({required_error: 'Theme is required'}).optional(),
});

export default async function saveSettings(prevState: BaseFormState, formData: FormData) {
    // get all fields
    let entries: Record<string, string> = {}

    // @ts-ignore
    for (const pair of formData.entries()) {
        entries[pair[0]] = pair[1]
    }

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

    return {
        message: 'Settings saved',
        success: true
    }
}

export async function getSettings(): Promise<Record<string, string>>{
    return await settings.getAll();
}
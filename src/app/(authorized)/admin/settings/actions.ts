'use server';

import {object, string, ZodString, ZodError} from "zod";
import settings from "@/lib/settings";

export type FieldErrors = {
    message?: string,
    success?: boolean
    [key: string]: string[] | string | boolean | undefined
} | undefined

export default async function saveSettings(prevState: FieldErrors, formData: FormData) {
    // get all fields
    let entries: Record<string, string> = {}

    // @ts-ignore
    for (const pair of formData.entries()) {
        entries[pair[0]] = pair[1]
    }

    try {
        const schema = object(
            Object.keys(entries).reduce((acc, key) => {
                acc[key] = string().min(1, `${key} is required`);
                return acc;
            }, {} as Record<string, ZodString>)
        );

        // Validate entries
        schema.parse(entries);

        // Save settings
        await settings.saveMultiple(entries)
    } catch (error) {
        if (error instanceof ZodError) {
            return error.formErrors.fieldErrors
        }

        return {message: 'An error occurred'}
    }

    return {
        message: 'Settings saved',
        success: true
    }
}

export async function getSettings(): Promise<Record<string, string>>{
    return await settings.getAll();
}
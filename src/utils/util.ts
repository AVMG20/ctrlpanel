import { z } from 'zod';

export function getFormDataEntries(formData: FormData) {
    const data: Record<string, string> = {}

    // @ts-ignore
    for (const [key, value] of formData.entries()) {
        data[key] = value
    }

    return data
}

export const ucFirst = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const numericString = (schema: z.ZodNumber) => z.preprocess((a) => {
    if (typeof a === 'string') {
        const parsed = parseInt(a, 10);
        if (isNaN(parsed)) {
            throw new Error('Invalid numeric string');
        }
        return parsed;
    } else if (typeof a === 'number') {
        return a;
    } else {
        throw new Error('Invalid input: must be string or number');
    }
}, schema);

import {z} from 'zod';

export const ucFirst = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isEmptyValue = (value: any) =>
    value === '' ||
    value === '<p></p>' ||
    value === undefined ||
    value === null ||
    (value instanceof File && value.size === 0);

export function getFormDataEntries(formData: FormData) {
    const data: Record<string, string | null | File> = {}

    for (const [key, value] of formData.entries()) {
        if (isEmptyValue(value)) {
            data[key] = null
        } else {
            data[key] = value
        }
    }

    return data
}

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

export const booleanString = (schema: z.ZodBoolean) => z.preprocess((a) => {
    if (a === 'true') {
        return true;
    } else if (a === 'false') {
        return false;
    } else {
        throw new Error('Invalid boolean string');
    }
}, schema);

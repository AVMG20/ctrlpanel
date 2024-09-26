import { z, ZodTypeAny } from 'zod';

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

export const numericString = (schema: ZodTypeAny) => z.preprocess((a) => {
    if (typeof a === 'string') {
        return parseInt(a, 10)
    } else if (typeof a === 'number') {
        return a;
    } else {
        return undefined;
    }
}, schema);

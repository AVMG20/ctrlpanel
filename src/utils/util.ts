export function getFormDataEntries(formData: FormData) {
    const data: Record<string, string> = {}

    // @ts-ignore
    for (const [key, value] of formData.entries()) {
        data[key] = value
    }

    return data
}
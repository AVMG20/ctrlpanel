export type BaseFormState = {
    message?: string;
    success?: boolean;
    [key: string]: any
}

export type Role = 'admin' | 'user' | 'guest';
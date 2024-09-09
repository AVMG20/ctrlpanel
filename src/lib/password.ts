import bcrypt from 'bcryptjs';

export function saltAndHashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}

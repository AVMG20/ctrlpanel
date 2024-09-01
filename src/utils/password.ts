import bcrypt from 'bcryptjs';

export function saltAndHashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

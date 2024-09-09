import {prisma} from '@/prisma';

export type Code = 'theme' | 'example' | string

class Settings {
    private static instance: Settings;

    private constructor() {}

    // Singleton Instance Getter
    public static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }

    // Get a single setting with type inference
    async get(code: Code, defaultValue: string|null = null): Promise<string | null> {
        const setting = await prisma.setting.findUnique({
            where: { code },
        });
        return setting ? (setting.value as string) : defaultValue;
    }

    // Get multiple settings with type inference
    async getMultiple(codes: string[]): Promise<Record<string, string>> {
        const settings = await prisma.setting.findMany({
            where: { code: { in: codes } },
        });

        return settings.reduce((acc, setting) => {
            acc[setting.code] = setting.value as string;
            return acc;
        }, {} as Record<string, string>);
    }

    //Get all settings
    async getAll(): Promise<Record<Code, string>> {
        const settings = await prisma.setting.findMany();
        return settings.reduce((acc, setting) => {
            acc[setting.code] = setting.value as string;
            return acc;
        }, {} as Record<string, string>);
    }

    // Save a single setting
    async save(code: Code, value: string): Promise<void> {
        await prisma.setting.upsert({
            where: { code },
            update: { value },
            create: { code, value },
        });
    }

    // Save multiple settings
    async saveMultiple(data: Record<Code, string>): Promise<void> {
        const upserts = Object.entries(data).map(([code, value]) =>
            prisma.setting.upsert({
                where: { code },
                update: { value },
                create: { code, value },
            })
        );

        await prisma.$transaction(upserts);
    }
}

export default Settings.getInstance();

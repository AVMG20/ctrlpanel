import {prisma} from '@/prisma';

//allowed setting codes
export type Code = 'theme' | 'motd' | 'creditsName'

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

    async get(code: Code, defaultValue?: string): Promise<string | null> {
        const setting = await prisma.setting.findUnique({
            where: { code },
        });

        return setting ? setting.value : defaultValue ?? null;
    }

    // Get multiple settings with type inference
    async getMultiple(codes: string[]): Promise<Record<Code, string|null>> {
        const settings = await prisma.setting.findMany({
            where: { code: { in: codes } },
        });

        return settings.reduce((acc, setting) => {
            acc[setting.code as Code]  = setting.value as string;
            return acc;
        }, {} as Record<Code, string>);
    }

    //Get all settings
    async getAll(): Promise<Record<Code, string|null>> {
        const settings = await prisma.setting.findMany();
        return settings.reduce((acc, setting) => {
            acc[setting.code as Code] = setting.value as string;
            return acc;
        }, {} as Record<Code, string>);
    }

    // Save a single setting
    async save(code: Code, value: string|null): Promise<void> {
        await prisma.setting.upsert({
            where: { code },
            update: { value },
            create: { code, value },
        });
    }

    // Save multiple settings
    async saveMultiple(data: Record<Code, string|null>): Promise<void> {
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

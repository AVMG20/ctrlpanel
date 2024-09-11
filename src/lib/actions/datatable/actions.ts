'use server';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

type FetchDataParams = {
    model: keyof PrismaClient; // Allow any Prisma model
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
    searchFields?: string[]; // Allow dynamic search fields
};

export async function fetchSimpleTableData({
    model,
    page = 1,
    limit = 10,
    search = '',
    sortBy = 'id',
    order = 'asc',
    searchFields = ['name'], // Default search fields (can be customized per model)
}: FetchDataParams) {
    const skip = (page - 1) * limit;

    const prismaModel = prisma[model]; // Dynamically access the model

    if (!prismaModel) {
        // @ts-ignore
        throw new Error(`Model ${model} does not exist in Prisma`);
    }

    // Construct the `where` clause dynamically based on searchFields
    let whereClause: Prisma.UserWhereInput | undefined = undefined;
    if (searchFields.length > 0 && search) {
        whereClause = {
            OR: searchFields.map(field => ({
                [field]: { contains: search, mode: 'insensitive' }
            }))
        };
    }

    // Fetch data and total count dynamically for the model
    // @ts-ignore
    const data = await prismaModel.findMany({
        where: whereClause,
        orderBy: { [sortBy]: order },
        skip,
        take: limit,
    });

    // @ts-ignore
    const totalCount = await prismaModel.count({
        where: whereClause,
    });

    return { data, totalCount };
}

import { PrismaClient } from '@prisma/client'
import {auth} from "@/auth";

const prisma = new PrismaClient();

export default async function home() {
    let post = await prisma.post.findFirst();
    const session = await auth();

    session?.user.id;



    return (
        <div>
        <h1>{post?.title}</h1>
        <h1>{post?.content}</h1>
        <p>My name is Ramon</p>
        </div>
    );
}
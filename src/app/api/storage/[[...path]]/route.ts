import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * /storage/path/to/image.jpg?size=thumbnail
 * /storage/path/to/image.jpg?size=preview
 *
 * Without size will return the orginal image
 */
export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
    const filePath = params.path || [];
    const size = request.nextUrl.searchParams.get('size');

    let fileName = filePath[filePath.length - 1];
    if (size === 'thumbnail') {
        fileName = `thumbnail_${fileName}`;
    } else if (size === 'preview') {
        fileName = `preview_${fileName}`;
    } else if (size === 'store') {
        fileName = `store_${fileName}`;
    }

    const fullPath = path.join(process.cwd(), 'public', 'storage', ...filePath.slice(0, -1), fileName);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Get the file's mime type
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes: { [key: string]: string } = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Read the file and create a Response
    const fileBuffer = await fs.promises.readFile(fullPath);
    return new NextResponse(fileBuffer, {
        headers: { 'Content-Type': contentType },
    });
}
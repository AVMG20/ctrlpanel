import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export class ImageService {
    private static instance: ImageService;
    private readonly basePath: string;

    private constructor() {
        this.basePath = path.join(process.cwd(), 'public', 'storage');
    }

    public static getInstance(): ImageService {
        if (!ImageService.instance) {
            ImageService.instance = new ImageService();
        }
        return ImageService.instance;
    }

    /**
     * Store an image file and return its relative path
     * @param {File} file
     * @returns {Promise<string>}
     */
    public async storeImage(file: File): Promise<string> {
        const fileName = this.generateFileName(file.name);
        const nestedPath = this.getNestedPath(fileName);
        const fullPath = path.join(this.basePath, nestedPath);

        await fs.mkdir(fullPath, {recursive: true});

        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(path.join(fullPath, fileName), buffer);

        // Use forward slashes for the returned path
        return ['storage', ...nestedPath.split(path.sep), fileName].join('/');
    }

    /**
     * Delete an image by its relative path
     * @param {string} relativePath
     * @returns {Promise<void>}
     */
    public async deleteImage(relativePath: string): Promise<void> {
        const fullPath = path.join(process.cwd(), 'public', relativePath);
        await fs.unlink(fullPath);

        // Attempt to remove empty directories
        const dirPath = path.dirname(fullPath);
        try {
            await fs.rmdir(dirPath);
            await fs.rmdir(path.dirname(dirPath));
        } catch (error) {
            // Ignore errors if directories are not empty
        }
    }

    private generateFileName(originalName: string): string {
        const fileExt = path.extname(originalName);
        const randomName = crypto.randomBytes(16).toString('hex');
        return `${randomName}${fileExt}`;
    }

    private getNestedPath(fileName: string): string {
        const hash = crypto.createHash('md5').update(fileName).digest('hex');
        return path.join(hash.slice(0, 2), hash.slice(2, 4));
    }
}

// Export a single instance
export default ImageService.getInstance();
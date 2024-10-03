import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

interface ImageSizes {
    thumbnail: { width: number; height: number };
    preview: { width: number; height: number };
    store: { width: number; height: number };
}

export class ImageService {
    private static instance: ImageService;
    private readonly basePath: string;
    private readonly sizes: ImageSizes;

    private constructor() {
        this.basePath = path.join(process.cwd(), 'public', 'storage');
        this.sizes = {
            thumbnail: { width: 32, height: 32 },
            preview: { width: 128, height: 64 },
            store: { width: 512, height: 256 }
        };
    }

    public static getInstance(): ImageService {
        if (!ImageService.instance) {
            ImageService.instance = new ImageService();
        }
        return ImageService.instance;
    }

    /**
     * Store an image file and its previews, and return their relative paths
     * @param {File} file
     * @returns {Promise<{original: string, thumbnail: string, preview: string}>}
     */
    public async storeImage(file: File): Promise<{original: string, thumbnail: string, preview: string, store: string}> {
        const fileName = this.generateFileName(file.name);
        const nestedPath = this.getNestedPath(fileName);
        const fullPath = path.join(this.basePath, nestedPath);

        await fs.mkdir(fullPath, {recursive: true});

        const buffer = Buffer.from(await file.arrayBuffer());
        const originalPath = path.join(fullPath, fileName);
        await fs.writeFile(originalPath, buffer);

        const thumbnailName = `thumbnail_${fileName}`;
        const previewName = `preview_${fileName}`;
        const storeName = `store_${fileName}`;

        await this.createPreview(originalPath, path.join(fullPath, thumbnailName), this.sizes.thumbnail);
        await this.createPreview(originalPath, path.join(fullPath, previewName), this.sizes.preview);
        await this.createPreview(originalPath, path.join(fullPath, storeName), this.sizes.store);

        // Use forward slashes for the returned paths
        const relativePath = ['storage', ...nestedPath.split(path.sep)].join('/');
        return {
            original: `${relativePath}/${fileName}`,
            thumbnail: `${relativePath}/${thumbnailName}`,
            preview: `${relativePath}/${previewName}`,
            store: `${relativePath}/${storeName}`
        };
    }

    /**
     * Delete an image and its previews by its relative path
     * @param {string} relativePath
     * @returns {Promise<void>}
     */
    public async deleteImage(relativePath: string): Promise<void> {
        const fullPath = path.join(process.cwd(), 'public', relativePath);
        const dirPath = path.dirname(fullPath);
        const fileName = path.basename(fullPath);

        await fs.unlink(fullPath);
        await fs.unlink(path.join(dirPath, `thumbnail_${fileName}`));
        await fs.unlink(path.join(dirPath, `preview_${fileName}`));
        await fs.unlink(path.join(dirPath, `store_${fileName}`));

        // Attempt to remove empty directories
        try {
            await fs.rmdir(dirPath);
            await fs.rmdir(path.dirname(dirPath));
        } catch (error) {
            // Ignore errors if directories are not empty
        }
    }

    private async createPreview(inputPath: string, outputPath: string, size: {width: number, height: number}): Promise<void> {
        await sharp(inputPath)
            .resize(size.width, size.height, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .toFile(outputPath);
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
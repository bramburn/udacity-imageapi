import sharp from 'Sharp'

export class ImageClass {
    async resizeImage(
        sourceFile: string,
        destination: string,
        width: number,
        height: number
    ): Promise<void> {
        await sharp(sourceFile).resize(height, width).toFile(destination)
    }

    async dynamicImage(width: number, height: number): Promise<Buffer> {
        const data = await sharp({
            create: {
                width,
                height,
                channels: 4,
                background: { r: 255, g: 0, b: 0, alpha: 0.5 },
            },
        })
            .jpeg({ mozjpeg: true })
            .toBuffer()

        return Buffer.from(data, 'base64')
    }
}

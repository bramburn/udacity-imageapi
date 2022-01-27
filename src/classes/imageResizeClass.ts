import sharp from 'Sharp'

export class ImageResizeClass {
    public async resizeImage(
        sourceFile: string,
        destination: string,
        width: number,
        height: number
    ): Promise<void> {
        await sharp(sourceFile).resize(height, width).toFile(destination)
    }
}

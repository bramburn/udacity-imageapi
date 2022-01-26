import Path from 'path'

export const errorImage = (): string => {
    return Path.join(__dirname, '../', 'images', 'Error.jpg')
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { promises: fs } = require('fs')
/*
 * @method fileCheckExists
 * @brief checks if a file exists or not
 * @return boolean
 * */
export async function fileCheckExists(path:string): Promise<boolean> {
    try {
        await fs.access(path)
        return true
    } catch {
        console.error('Image not found')
        return false
    }
}

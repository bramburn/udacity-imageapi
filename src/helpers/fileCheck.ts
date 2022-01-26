// eslint-disable-next-line @typescript-eslint/no-var-requires
const {promises: fs} = require('fs')
/*
* @method fileCheckExists
* @brief checks if a file exists or not
* @return boolean
* */
export async function fileCheckExists(path) {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}

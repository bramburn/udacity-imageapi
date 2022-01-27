import { Router } from 'express'
import paramsChecker from '../middleware/paramsChecker'
import { fileCheckExists } from '../classes/fileCheckClass'
import Path from 'path'
import { ImageResizeClass } from '../classes/imageResizeClass'

const imageResizeRouter = Router()
imageResizeRouter.use(paramsChecker)

imageResizeRouter.get('/', async (req, res): Promise<void> => {
    const imageFileName = <string>req.query.image
    const width = parseInt(<string>req.query.width)
    const height = parseInt(<string>req.query.height)
    //check if the file exists
    const sourcePath = Path.join(__dirname, '../images', imageFileName)

    if (!(await fileCheckExists(sourcePath))) {
        console.error('Image does not exists')
        res.status(500).end()
        return
    }

    // resize and serve
    const cachedImage = Path.join(
        __dirname,
        '../cached',
        `${width}_${height}_${imageFileName}`
    )

    if (!(await fileCheckExists(cachedImage))) {
        //create the file
        try {
            const im = new ImageResizeClass()
            await im.resizeImage(sourcePath, cachedImage, width, height)
        } catch {
            console.error('Error building the image')
            res.status(500).end()
        }
    }
    // else serve it

    res.sendFile(cachedImage)
    return
})

export default imageResizeRouter

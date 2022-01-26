/*
 * This is a file that returns an app router
 * */
import { Request, Response, Router } from 'express'
import Path from 'path'
import { errorImage } from './helpers/errorHandlers'
import { fileCheckExists } from './helpers/fileCheck'
import { ImageClass } from './helpers/imageClass'

/*
 * @method imageResizerRouter
 * This method returns an express Router which allows you to assign to an endpoint
 * You can add middlewares to it if needed to check if its authenticated, etc...
 * But this is out of the scope of this assignment
 * */
const router = Router()

router.get(
    '/:image/:height/:width/',
    async (req: Request, res: Response): Promise<void> => {
        const { image, height, width } = req.params

        if (!image || !height || !width) {
            console.error('no image or height or width provided')
            res.status(500).sendFile(errorImage())
            res.end()
            return
        }

        // if either file is not in through out
        if (parseInt(height) <= 0 || parseInt(width) <= 0) {
            console.error('no height or width provided that is a unsigned int')
            res.status(500).sendFile(errorImage())
            res.end()
            return
        }

        const sourceFile = Path.join(__dirname, 'images', image)
        //check if file exists

        if (!(await fileCheckExists(sourceFile))) {
            console.error('Cannot find source file ' + sourceFile)
            res.status(404).sendFile(errorImage())
            res.end()
            return
        }

        //now the files and params are all good
        // let's check if the image is cached if it is, then provide it back
        const destinationOfCachedFile = Path.join(
            __dirname,
            'cached',
            `${height}_${width}_${image}`
        )
        try {
            if (!(await fileCheckExists(destinationOfCachedFile))) {
                // else we generate the cached

                const imageClass = new ImageClass()
                await imageClass.resizeImage(
                    sourceFile,
                    destinationOfCachedFile,
                    parseInt(width),
                    parseInt(height)
                )
            }
        } catch {
            console.error('Error processing image')
            res.status(500)
            res.end()
            return
        }

        res.sendFile(destinationOfCachedFile)
        return
    }
)

export const route = router

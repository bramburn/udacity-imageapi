/*
* This is a file that returns an app router
* */
import {Request, Response, Router as expressRouter} from "express"
import sharp from 'sharp'
import Path from "path"
import {errorImage} from "./middleware/paramsCheck"
import {fileCheckExists} from "./helpers/fileCheck"


/*
* @method imageResizerRouter
* This method returns an express Router which allows you to assign to an endpoint
* You can add middlewares to it if needed to check if its authenticated, etc...
* But this is out of the scope of this assignment
* */
export const imageResizerRouter = () => {
    const router = expressRouter()


    router.get("/:image/:height/:width/", async (req: Request, res: Response) => {
        const {image, height, width} = req.params

        if (!image || !height || !width) {
            console.error("no image or height or width provided")
            return res.status(500).sendFile(errorImage())
        }

        // if either file is not in through out
        if (parseInt(height) <= 0 || parseInt(width) <= 0) {
            console.error("no height or width provided that is a unsigned int")
            return res.status(500).sendFile(errorImage())
        }

        const sourceFile = Path.join(__dirname, "images", image)
        //check if file exists
        if (!await fileCheckExists(sourceFile)) {
            console.error("Cannot find source file " + sourceFile)
            return res.status(404).sendFile(errorImage())
        }

        //now the files and params are all good
        // let's check if the image is cached if it is, then provide it back
        const currentCachedFile = Path.join(__dirname, 'cached', `${height}_${width}_${image}`)
        if (!await fileCheckExists(currentCachedFile)) {
            // else we generate the cached
            await sharp(sourceFile)
                .resize(parseInt(height), parseInt(width))
                .toFile(currentCachedFile)

        }


        return res.status(200).sendFile(currentCachedFile)

    })


    return router


}

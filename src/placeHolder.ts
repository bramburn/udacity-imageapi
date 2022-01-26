import { Response, Request, Router } from 'express'
import ParamsCheck from './middleware/paramsCheck'
import sharp from 'Sharp'

/*
 * @method placeHolderRouter
 * @brief router for dealing with placeholder image.
 * This is a dynamic image generator providing a red image
 * usage:
 *
 * ...
 * const placeHolderApi = placeHolderRouter()
 * app.use('/api/placeholder', placeHolderApi)
 * ...
 *
 * @return express.router
 * */
export const placeHolderRouter = ():Router => {
    const router = Router()

    //add a basic middleware for all param checks
    router.use(ParamsCheck)

    router.get('/', async (req: Request, res: Response) => {
        const width = parseInt(<string>req.query.w)
        const height = parseInt(<string>req.query.h)

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

        const img = Buffer.from(data, 'base64')

        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': img.length,
        })

        return res.end(img)
    })

    return router
}

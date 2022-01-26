import { Response, Request, Router } from 'express'
import ParamsCheck from './middleware/paramsCheck'
import { ImageClass } from './helpers/imageClass'

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

const router = Router()

//add a basic middleware for all param checks
router.use(ParamsCheck)

router.get('/', async (req: Request, res: Response): Promise<void> => {
    const width = parseInt(<string>req.query.w)
    const height = parseInt(<string>req.query.h)

    try {
        const imageClass = new ImageClass()
        const img = await imageClass.dynamicImage(width, height)

        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': img.length,
        })

        res.end(img)
        return
    } catch {
        res.status(500).end()
        return
    }
})

export const route = router

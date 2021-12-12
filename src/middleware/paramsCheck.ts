import {NextFunction, Request, Response} from "express"
import * as sharp from 'sharp'

const error = async function () {
    const s = await sharp({
        create: {
            width: 300,
            height: 200,
            channels: 4,
            background: {r: 255, g: 0, b: 0, alpha: 0.5}

        }
    })
        .png()
        .toBuffer()
    return s
}


export default async function (req: Request, res: Response, next: NextFunction) {
    const width = req.query.w
    const height = req.query.h

    if (typeof height === 'undefined' || typeof width === 'undefined') {
        await res.pipe(await error())
    }

    next()
}
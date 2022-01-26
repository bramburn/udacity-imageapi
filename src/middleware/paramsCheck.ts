import { NextFunction, Request, Response } from 'express'
import Path from 'path'

export const errorImage = () => {
    return Path.join(__dirname, '../', 'images', 'Error.jpg')
}

export default async function (
    req: Request,
    res: Response,
    next: NextFunction
) {
    const width = req.query.w
    const height = req.query.h

    if (typeof height === 'undefined' || typeof width === 'undefined') {
        return res.status(500).sendFile(errorImage())
    }

    next()
}

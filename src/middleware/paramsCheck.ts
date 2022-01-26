import { NextFunction, Request, Response } from 'express'
import { errorImage } from '../helpers/errorHandlers'

export default async function (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const width = req.query.w
    const height = req.query.h

    if (typeof height === 'undefined' || typeof width === 'undefined') {
        return res.status(500).sendFile(errorImage())
    }

    next()
}

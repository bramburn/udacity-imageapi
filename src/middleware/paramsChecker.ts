import { NextFunction, Request, Response } from 'express'

export default async function (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const image = req.query.image
    const width = parseInt(<string>req.query.width)
    const height = parseInt(<string>req.query.height)

    // check if all params are there
    if (!image || !width || !height) {
        console.error('Issue with params')
        res.status(500).end()
        return
    }

    // if there is the params let's check if they are valid
    if (isNaN(width) || isNaN(height)) {
        console.error('the param is not right')
        res.status(500).end()
        return
    }

    next()
}

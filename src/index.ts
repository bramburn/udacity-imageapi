import express from 'express'
import { Request, Response } from 'express'
import { route as placeHolderRoute } from './placeHolder'
import { route as imageApiRoute } from './resizerApi'

// init express and set port
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response): void => {
    res.json({
        status: 'ok',
        message: 'All good',
    })
})

//router for placeholder
app.use('/api/placeholder', placeHolderRoute)
app.use('/api/images', imageApiRoute)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app

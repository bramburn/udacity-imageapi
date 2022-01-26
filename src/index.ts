import express from 'express'
import {Request, Response} from "express"
import {placeHolderRouter} from "./placeHolder"
import {imageResizerRouter} from "./resizerApi"

// init express and set port
const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
    res.json({
        "status": "ok",
        "message": "All good"
    })
})

const placeHolderApi = placeHolderRouter()
const imageApi = imageResizerRouter()
//router for placeholder
app.use('/api/placeholder', placeHolderApi)
app.use('/api/images', imageApi)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


export default app

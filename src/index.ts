import express from 'express'
import {Request, Response} from "express"
import placeHolder from "./placeHolder"

const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
    // res;res
    res.json({
        "status": "ok",
        "message": "you need to "
    }).set('Content-Type', 'application/json')
})

//router for placeholder
app.use('/placeholder', placeHolder)



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


export default app
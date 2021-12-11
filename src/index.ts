import express from 'express'
import {Request,Response} from "express";

const app = express();
const port = 3000

app.get("/",(req:Request,res:Response)=>{

    res.json({
        "status":"ok",
        "message":"you need to "
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app
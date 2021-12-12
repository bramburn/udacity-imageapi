import express, {Response, Request} from "express"
import paramsCheck from "./middleware/paramsCheck"

const app = express()

app.use(paramsCheck)
// check if we have params


const imageOptions = {
    setHeaders: function (res, path, stat) {
        res.set('Content-Type', 'application/json')
    }
}
app.use(express.static('public', imageOptions))




// todo add middleware
app.get('/', function (req: Request, res: Response) {
    // get params
    const width = 100
    const height = 100

    res.json({'true':true})
})


export default app
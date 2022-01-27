import express from 'express'
import imageResizeRouter from './pages/imageResize'
const app = express()
const port = 3000

app.use('/api/image/', imageResizeRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app

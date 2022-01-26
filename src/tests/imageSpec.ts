import app from '../index'
import supertest from 'supertest'
import { ImageClass } from '../helpers/imageClass'
import Path from 'path'
import { fileCheckExists } from '../helpers/fileCheck'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
const request = supertest(app)

describe('Test the image function', () => {
    beforeEach(function (done) {
        setTimeout(function () {
            done()
        }, 1000)
    })
    const im = new ImageClass()
    const sourcePath = Path.join(__dirname, '../', 'images')
    const cachedPath = Path.join(__dirname, '../', 'cached')
    const finalPath = Path.join(cachedPath, 'testImage.jpg')
    const images: string[] = [
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
    ]
    it('Check if everything is generated', (done) => {
        im.resizeImage(
            Path.join(sourcePath, images[0]),
            finalPath,
            100,
            100
        ).then(() => {
            const d = fileCheckExists(finalPath)
                .then(() => true)
                .catch(() => false)
            expect(d).toBeTrue()

            fs.unlinkSync(finalPath)
        })
        done()
    })
})

describe('Check if image resize works - ', () => {
    it('No Error when file exists and resized to 100', (done) => {
        request.get('/api/images/fjord.jpg/100/100').then((res) => {
            expect(res.status).toBe(200)
        })
        done()
    })

    it('Error when file does not exists', (done) => {
        request.get('/api/images/noexists.jpg/100/100/').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })
})

describe('Check Params of image submission -', () => {
    it('Errors when no width or height provided', (done) => {
        request.get('/api/images/noexists.jpg').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })

    it('Errors when no height provided', (done) => {
        request.get('/api/images/noexists.jpg//100/').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })

    it('Errors when no width  provided', (done) => {
        request.get('/api/images/noexists.jpg/100//').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })

    it('Errors when height is not int provided', (done) => {
        request.get('/api/images/noexists.jpg/hello/100').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })

    it('Errors when width is not int provided', (done) => {
        request.get('/api/images/noexists.jpg/100/hello').then((res) => {
            expect(res.status).toBe(404)
        })
        done()
    })
})

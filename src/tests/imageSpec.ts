import app from '../index'
import supertest from 'supertest'
import { Response } from 'express'

const request = supertest(app)

describe('Check if image resize works', () => {
    it('No Error when file exists and resized to 100', async (done) => {
        const res: Response = await request.get('/api/images/fjord.jpg/100/100')
        expect(res.status).toBe(200)
        done()
    })

    it('Error when file does not exists', async (done) => {
        const res: Response = await request.get(
            '/api/images/noexists.jpg/100/100'
        )
        expect(res.status).toBe(404)
        done()
    })
})

describe('Check Params of image submission', () => {
    it("Errors when no height or width provided + file doesn't exists", async (done) => {
        const res: Response = await request.get('/api/images/noexists.jpg')
        expect(res.status).toBe(404)
        done()
    })

    it('Errors when no height or width provided', async (done) => {
        const res: Response = await request.get('/api/images/fjord.jpg')
        expect(res.status).toBe(404)
        done()
    })

    it('Errors when no height provided', async (done) => {
        const res: Response = await request.get('/api/images/noexists.jpg//100')
        expect(res.status).toBe(404)
        done()
    })

    it('Errors when no width  provided', async (done) => {
        const res: Response = await request.get('/api/images/noexists.jpg/100/')
        expect(res.status).toBe(404)
        done()
    })

    it('Errors when height is not int provided', async (done) => {
        const res: Response = await request.get(
            '/api/images/noexists.jpg/hello/100'
        )
        expect(res.status).toBe(404)
        done()
    })

    it('Errors when width is not int provided', async (done) => {
        const res: Response = await request.get(
            '/api/images/noexists.jpg/100/hello'
        )
        expect(res.status).toBe(404)
        done()
    })
})

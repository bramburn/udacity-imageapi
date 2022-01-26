import supertest from 'supertest'
import app from '../index'
import { Response } from 'express'

const request = supertest(app)

describe('server basic check', () => {
    it('test home api default get', async (done) => {
        const response: Response = await request.get('/')
        expect(response.status).toBe(200)

        done()
    })
})

//

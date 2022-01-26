import app from '../index'
import supertest from 'supertest'
import { Response } from 'express'

const request = supertest(app)
describe('Placeholder basic checks', () => {
    it('test placeholder api default placeholder', async () => {
        const response: Response = await request.get(
            '/api/placeholder/?w=100&h=100'
        )
        expect(response.status).toBe(200)
        const type = response.header['content-type']

        expect(type.toString()).toBe('image/jpeg')
    })
})

describe("Check if api's URL param is provided", () => {
    it('Error provided when no Width or Height provided', async () => {
        const response: Response = await request.get('/api/placeholder')
        expect(response.status).toBe(500)
    })

    it('Error provided when no Height provided', async () => {
        const response: Response = await request.get('/api/placeholder?w=100')
        expect(response.status).toBe(500)
    })

    it('Error provided when no Width provided', async () => {
        const response: Response = await request.get('/api/placeholder?w=100')
        expect(response.status).toBe(500)
    })
})

import app from '../index'
import supertest from 'supertest'
import { Response } from 'express'
import { ImageResizeClass } from '../classes/imageResizeClass'
import Path from 'path'
import * as fs from 'fs'

const request = supertest(app)

describe('Check the image class ', async () => {
    const im = new ImageResizeClass()
    const sourcePath = Path.join(__dirname, '../', 'images')
    const cachedPath = Path.join(__dirname, '../', 'cached')
    const images: string[] = [
        'encenadaport.jpg',
        'fjord.jpg',
        'icelandwaterfall.jpg',
        'palmtunnel.jpg',
        'santamonica.jpg',
    ]

    it('should build an image', async function (): Promise<void> {
        const finalImage = Path.join(cachedPath, 'final.jpg')
        try {
            await im.resizeImage(
                Path.join(sourcePath, images[0]),
                finalImage,
                100,
                100
            )
        } catch {
            fail()
        }

        fs.unlinkSync(finalImage)
    })

    it('should throw an error', async function (): Promise<void> {
        const finalImage = Path.join(cachedPath, 'final.jpg')
        try {
            await im.resizeImage(
                Path.join(sourcePath, 'noexists'),
                finalImage,
                100,
                100
            )
        } catch (e) {
            expect((e as { message; status }).message).toContain('missing')
        }
    })
})

describe('Check the image resize api', async (): Promise<void> => {
    it('Check if the basic image api works', async (): Promise<void> => {
        const res: Response = await request.get(
            '/api/image/?image=encenadaport.jpg&width=100&height=100'
        )

        expect(res.status).toBe(200)
    })

    it('Check if errors with nothing', async (): Promise<void> => {
        const res: Response = await request.get('/api/image/')

        expect(res.status).toBe(500)
    })

    it('Check if errors in wrong query string', async (): Promise<void> => {
        const res: Response = await request.get(
            '/api/image/?image=hell&width=100&height=dd'
        )

        expect(res.status).toBe(500)
    })

    it('Check if errors in wrong query string and image name', async (): Promise<void> => {
        const res: Response = await request.get(
            '/api/image/?image=hell&width=d3&height=dd'
        )

        expect(res.status).toBe(500)
    })
    it('Check if errors in wrong query string height', async (): Promise<void> => {
        const res: Response = await request.get(
            '/api/image/?image=encenadaport.jpg&width=100&height=dd'
        )

        expect(res.status).toBe(500)
    })
})

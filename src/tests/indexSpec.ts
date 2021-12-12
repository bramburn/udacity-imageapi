import supertest from "supertest"
import app from "../index"
import {Response} from "express"

const request = supertest(app)


describe("server basic check", () => {
    it("test home api default get", async (done) => {
        const response: Response = await request.get("/").set('Accept', 'application/json')
        expect(response.status).toBe(200)
        expect('Content-Type').toBe('application/json')

        done()

    })

})

//
import app from "../index"
import supertest from "supertest"

const request = supertest(app)
describe("server basic check", () => {
    it("test placeholder api default placeholder", async (done) => {
        const response: Response = await request.get("/api/placeholder?w=100&h=100")
        expect(response.status).toBe(200)
        expect('Content-Type').toBe('image/jpeg')
        done()

    })
})
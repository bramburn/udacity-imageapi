import app from "../index"
import request from "supertest"
import {thrownError} from './indexSpec'

describe("server basic check", () => {
    it("test placeholder api default placeholder", () => {
        request(app).get("/api/placeholder?w=100&h=100")
            .expect('Content-Type', 'image/jpeg')
            .end(thrownError)
    })
})
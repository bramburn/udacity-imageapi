import request from "supertest"
import app from "../index"

export const thrownError = function (err, res) {
    if (err) throw err;
}

describe("server basic check", () => {
    it("test home api default get", () => {
        request(app)
            .get("/")
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(thrownError);
    })

})

//
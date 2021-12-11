"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thrownError = void 0;
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const thrownError = function (err, res) {
    if (err)
        throw err;
};
exports.thrownError = thrownError;
describe("server basic check", () => {
    it("test home api default get", () => {
        (0, supertest_1.default)(index_1.default)
            .get("/")
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(exports.thrownError);
    });
});
//

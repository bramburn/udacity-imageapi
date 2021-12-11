"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const indexSpec_1 = require("./indexSpec");
describe("server basic check", () => {
    it("test placeholder api default placeholder", () => {
        (0, supertest_1.default)(index_1.default).get("/api/placeholder?w=100&h=100")
            .expect('Content-Type', 'image/jpeg')
            .end(indexSpec_1.thrownError);
    });
});

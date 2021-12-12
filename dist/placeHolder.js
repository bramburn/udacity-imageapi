"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paramsCheck_1 = __importDefault(require("./middleware/paramsCheck"));
const app = (0, express_1.default)();
app.use(paramsCheck_1.default);
// check if we have params
const imageOptions = {
    setHeaders: function (res, path, stat) {
        res.set('Content-Type', 'application/json');
    }
};
app.use(express_1.default.static('public', imageOptions));
// todo add middleware
app.get('/', function (req, res) {
    // get params
    const width = 100;
    const height = 100;
    res.json({ 'true': true });
});
exports.default = app;

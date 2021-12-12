"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const placeHolder_1 = __importDefault(require("./placeHolder"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    // res;res
    res.json({
        "status": "ok",
        "message": "you need to "
    }).set('Content-Type', 'application/json');
});
//router for placeholder
app.use('/placeholder', placeHolder_1.default);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const routes_1 = require("./app/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.routes);
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message,
        error: err,
    });
};
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Load env variables
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "My App";
// Dummy route
app.get("/", (req, res) => {
    res.json({
        message: `🚀 Hello from ${APP_NAME}!`,
        port: PORT,
        time: new Date().toISOString(),
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`✅ ${APP_NAME} running at http://localhost:${PORT}`);
});

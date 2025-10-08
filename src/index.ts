import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Load env variables
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "My App";

// Dummy route
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: `🚀 Hello from ${APP_NAME}! Rupam`,
        port: PORT,
        time: new Date().toISOString(),
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ ${APP_NAME} running at http://localhost:${PORT}`);
});

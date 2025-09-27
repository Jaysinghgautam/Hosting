 import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
// PORT environment variable ko use karein, ya default 3000 set karein
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend jaysingh" });
 
});

// Vercel Compatibility Fix:
// hum app.listen() ko tabhi call karte hain jab hum production environment mein nahi hote hain.
// Vercel khud request handling karta hai.
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        // Sirf local development ke liye console log
        console.log(`✅ Server running LOCALLY on http://localhost:${PORT}`);
    });
}

// Vercel ke liye sabse zaruri step:
// Application instance ko export karein, taaki Vercel ise serverless function ke taur par use kar sake.
export default app;

 import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// PORT environment variable ko use karein, ya default 4000 set karein
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend jaysingh 🚀" });
});

// IMPORTANT for Render: Always listen on PORT and 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});

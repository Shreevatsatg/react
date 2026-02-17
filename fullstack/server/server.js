import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

// OR more secure:
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

console.log("Allowed Origin:", process.env.FRONTEND_URL);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello shreevatsa tg!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

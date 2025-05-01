import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // enable CORS for all origins
// OR more secure:
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import express from "express";
import { config } from "dotenv";
const app = express();
config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/health", (req, res) => {
  res.send("OK health");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

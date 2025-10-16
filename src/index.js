import express from "express";
import { config } from "dotenv";
const app = express();
config();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/ready", (req, res) => {
  res.send("OK ready");  // so nginx will call this endpoint as http://localhost/path
});
app.get("/health", (req, res) => { 
  res.send("OK health");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`); // nothing
});

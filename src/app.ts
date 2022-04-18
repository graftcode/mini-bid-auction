import express from "express";
const app = express();

import authRoutes from "./routes/auth";

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", [...authRoutes]);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

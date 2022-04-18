import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../.env` });

import authRoutes from "./routes/auth";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", [...authRoutes]);

mongoose.connect(`${process.env.DATABASE_URL}`);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

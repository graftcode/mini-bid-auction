import { Router } from "express";
import verifyToken from "../../validation/verifyToken";

const router = Router();

router.get("/items", verifyToken, (req, res) => {
  console.log("res.locals: ", res.locals);
  res.send("this is the items page");
});

export default router;

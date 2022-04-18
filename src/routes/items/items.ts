import { Router as expressRouter } from "express";

const router = expressRouter();

router.get("/items", (req, res) => {
  res.send("this is the items page");
});

export default router;

import { Router as expressRouter } from "express";

const router = expressRouter();

router.post("/login", (req, res) => {
  res.send("logged in");
});

export default router;

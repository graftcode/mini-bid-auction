import { Router } from "express";

import signupHandler from "./signup";
import loginHandler from "./login";

const router = Router();

router.post("/signup", signupHandler);
router.post("/login", loginHandler);

export default router;

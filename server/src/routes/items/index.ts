import { Router } from "express";

import verifyToken from "../../validation/verifyToken";
import getItemsHandler from "./items";
import sellitemHandler from "./sellItem";
import bidHandler from "./bid";

const router = Router();

router.get("/items", verifyToken, getItemsHandler);

router.post("/item/bid", verifyToken, bidHandler);
router.post("/sell-item", verifyToken, sellitemHandler);

export default router;

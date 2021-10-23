import { getAuth, postAuth } from "../controllers";
import { Router } from "express";
const router = Router();

router.get("/", getAuth);
router.post("/", postAuth);

export { router };

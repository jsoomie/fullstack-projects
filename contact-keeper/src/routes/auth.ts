import { getAuth, postAuth } from "../controllers";
import { userLoginChecks } from "../validations";
import { Router } from "express";
const router = Router();

router.get("/", getAuth);
router.post("/", userLoginChecks, postAuth);

export { router };

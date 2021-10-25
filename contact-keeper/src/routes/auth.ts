import { getAuth, postAuth } from "../controllers";
import { userLoginChecks } from "../validations";
import { tokenChecker } from "../middlewares/auth";
import { Router } from "express";
const router = Router();

router.get("/", tokenChecker, getAuth);
router.post("/", userLoginChecks, postAuth);

export { router };

import { getAuth, postAuth } from "../controllers";
import { Router, Request, Response } from "express";
const router = Router();

/**
 * @access        Public
 * @description   Gets Auth
 * @route         GET api/auth
 */
router.get("/", getAuth);

/**
 * @access        Public
 * @description   Posts Auth
 * @route         Post api/auth
 */
router.post("/", postAuth);

export { router };

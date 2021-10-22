//  USERS ROUTES
import { getUsers, postUsers } from "../controllers";
import { Router } from "express";
const router = Router();

/**
 * @access        Public
 * @description   Gets all users
 * @route         GET api/users
 */
router.get("/", getUsers);

/**
 * @access        Public
 * @description   Registers user
 * @route         POST api/users
 */
router.post("/", postUsers);

export { router };

//  USERS ROUTES
import { getUsers, postUsers } from "../controllers";
import { Router } from "express";
const router = Router();

/**
 * @route         GET api/users
 * @description   Gets all users
 * @access        Public
 */
router.get("/", getUsers);

/**
 * @route         POST api/users
 * @description   Registers user
 * @access        Public
 */
router.post("/", postUsers);

export { router };

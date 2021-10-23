//  USERS ROUTES
import { getUsers, postUsers } from "../controllers";
import { Router } from "express";
const router = Router();

router.get("/", getUsers);
router.post("/", postUsers);

export { router };

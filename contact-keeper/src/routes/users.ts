//  USERS ROUTES
import { getUsers, postUsers } from "../controllers";
import { userChecks } from "./routeValidators";
import { Router } from "express";
const router = Router();

router.get("/", getUsers);
router.post("/", userChecks, postUsers);

export { router };

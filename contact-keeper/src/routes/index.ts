import { Router } from "express";
const router = Router();

import { router as userRoutes } from "./users";
import { router as contactRoutes } from "./contacts";
import { router as authRoutes } from "./auth";

router.use("/users", userRoutes);
router.use("/contacts", contactRoutes);
router.use("/auth", authRoutes);

export { router };

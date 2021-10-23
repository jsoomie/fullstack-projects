import { Router, Request, Response } from "express";
const router = Router();

import { router as userRoutes } from "./users";
import { router as contactRoutes } from "./contacts";
import { router as authRoutes } from "./auth";

router.use("/users", userRoutes);
router.use("/contacts", contactRoutes);
router.use("/auth", authRoutes);

//  Route catch all
router.get("*", (req: Request, res: Response) => {
  res.json({ msg: "Welcome to the Contact Keeper API" });
});

export { router };

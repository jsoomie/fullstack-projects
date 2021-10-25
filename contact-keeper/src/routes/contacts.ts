import {
  getContacts,
  postContacts,
  updateContacts,
  deleteContacts,
} from "../controllers";
import { tokenChecker } from "../middlewares/auth";
// import {  } from "../validations";

import { Router } from "express";
const router = Router();

router.get("/", tokenChecker, getContacts);
router.post("/", postContacts);
router.put("/:id", updateContacts);
router.delete("/:id", deleteContacts);

export { router };

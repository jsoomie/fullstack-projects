import {
  getContacts,
  postContacts,
  updateContacts,
  deleteContacts,
} from "../controllers";
import { tokenChecker } from "../middlewares/auth";
import { contactsChecks } from "../validations";

import { Router } from "express";
const router = Router();

router.get("/", tokenChecker, getContacts);
router.post("/", tokenChecker, contactsChecks, postContacts);
router.put("/:id", tokenChecker, updateContacts);
router.delete("/:id", tokenChecker, deleteContacts);

export { router };

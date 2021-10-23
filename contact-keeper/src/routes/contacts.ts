import {
  getContacts,
  postContacts,
  updateContacts,
  deleteContacts,
} from "../controllers";

import { Router } from "express";
const router = Router();

router.get("/", getContacts);
router.post("/", postContacts);
router.put("/:id", updateContacts);
router.delete("/:id", deleteContacts);

export { router };

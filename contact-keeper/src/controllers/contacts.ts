//  CONTACTS CONTROLLERS
import { Response, Request } from "express";
import { User } from "../models";
import { Contact } from "../models/Contact";
import { validationResult } from "express-validator";

type Controllers = (req: Request, res: Response) => void;

/**
 * @access        Private
 * @description   Gets users contacts
 * @route         GET /api/contacts
 */
export const getContacts: Controllers = async (req, res) => {
  try {
    if (req.user) {
      const contacts = await Contact.find({ user: req.user.id }).sort({
        date: -1,
      });
      res.json(contacts);
    }
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Creates contacts
 * @route         POST /api/contacts
 */
export const postContacts: Controllers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, phone, type } = req.body;
  try {
    if (name && req.user) {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    }
    res.json({ msg: "[CONTROLLER] POST api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Updates contacts
 * @route         PUT /api/contacts/:id
 */
export const updateContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] PUT api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

/**
 * @access        Private
 * @description   Deletes contacts
 * @route         DELETE /api/contacts/:id
 */
export const deleteContacts: Controllers = (req, res) => {
  try {
    res.json({ msg: "[CONTROLLER] DELETE api/contacts/" });
  } catch (err) {
    console.error(err);
    res.json(err).status(500);
  }
};

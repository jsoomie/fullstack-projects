import { check } from "express-validator";

const pwLength = 6;

export const userChecks = [
  check("name", "Please enter a name").not().isEmpty(),
  check("email", "Please enter valid email").isEmail(),
  check(
    "password",
    `Please enter a password with ${pwLength} or more characters`
  ).isLength({ min: pwLength }),
];

export const userLoginChecks = [
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Password is required").exists(),
];

export const contactsChecks = [
  check("name", "Name is required").not().isEmpty(),
];

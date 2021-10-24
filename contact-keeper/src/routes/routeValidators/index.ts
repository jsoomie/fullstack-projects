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

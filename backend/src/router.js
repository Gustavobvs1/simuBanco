const express = require("express");
const router = express.Router();

// Tabela usuarios
const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

const { validateName, validateSurname, validateEmail, validatePassword } =
  usersMiddleware;
const validate = [
  validateName,
  validateSurname,
  validateEmail,
  validatePassword,
];

router.post(
  "/cadastro",
  //   validate.forEach((Element) => Element()),
  usersController.addUser
);

module.exports = router;

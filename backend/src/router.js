const express = require("express");
const router = express.Router();

// Tabela usuarios
const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

router.get("/cadastro", usersController.getUsers);
router.post(
  "/cadastro",
  usersMiddleware.validateName,
  usersMiddleware.validateSurname,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.addUser
);
router.put(
  "/cadastro/:id",
  usersMiddleware.validateName,
  usersMiddleware.validateSurname,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.updateUser
);
router.delete("/cadastro/:id", usersController.deleteUser);

module.exports = router;

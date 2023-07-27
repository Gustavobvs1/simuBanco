const express = require("express");
const router = express.Router();

// Tabela usuarios
const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

//Pegar todos os usuarios
router.get("/users", usersController.getUsers);

//Pegar os usuarios da sessão
router.get("/login", usersController.loginUser);
//Cadastro de usuario
router.post(
  "/cadastro",
  usersMiddleware.validateName,
  usersMiddleware.validateSurname,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.addUser
);
//Atualizar dados do usuario
router.put(
  "/users/:id",
  usersMiddleware.validateName,
  usersMiddleware.validateSurname,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.updateUser
);

//Deletar usuario
router.delete("/users/:id", usersController.deleteUser);

//Login de usuario
router.post("/login", usersController.loginUser);

module.exports = router;

const express = require("express");
const router = express.Router();

// Tabela usuarios
const usersController = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");

//Pegar todos os usuarios
router.get("/users", usersController.getUsers);

//Pegar os usuarios da sessão
router.post("/session", usersController.getUser);

//Cadastro de usuario
router.post(
  "/cadastro",
  usersMiddleware.validateName,
  usersMiddleware.validateCpf,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.addUser
);

//Atualizar dados do usuario
router.put(
  "/users/:id",
  usersMiddleware.validateName,
  usersMiddleware.validateCpf,
  usersMiddleware.validateEmail,
  usersMiddleware.validatePassword,
  usersController.updateUser
);

//Deletar usuario
router.delete("/users/:id", usersController.deleteUser);

//Login de usuario
router.post("/login", usersController.loginUser);

router.get("/getcookie", (req, res) => {
  res.status(200).json(req.cookies);
});

router.get("/deletecookie", (req, res) => {
  res.clearCookie("user").status(204).json(req.cookies);
});

//Tabela Contas

const accountsController = require("./controllers/accountsController");

router.get("/accounts", accountsController.getAccounts);
router.get("/account/:usuario_id", accountsController.getAccount);
router.post("/accounts", accountsController.addAccount);
router.delete("/accounts/:id", accountsController.deleteAccount);

//Tabela Cartoes

const cardsController = require("./controllers/cardsController");

router.get("/cards", cardsController.getCards);
router.get("/card/:conta_id", cardsController.getCard);
router.post("/cards", cardsController.addCard);
router.delete("/cards/:id", cardsController.deleteCard);

module.exports = router;

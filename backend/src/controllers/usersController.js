const usersModel = require("../models/usersModel");

async function getUsers(req, res) {
  const users = await usersModel.getUsers();
  return res.status(200).json(users);
}

async function getUser(req, res) {
  const [user] = await usersModel.getUser(req.body);
  res.status(200).json(user);
}

async function addUser(req, res) {
  const createdUser = await usersModel.addUser(req.body);
  return res.status(201).json(createdUser);
}

async function updateUser(req, res) {
  const { id } = req.params;
  await usersModel.updateUser(id, req.body);
  return res.status(204).json();
}

async function deleteUser(req, res) {
  const { id } = req.params;
  await usersModel.deleteUser(id);
  return res.status(204).json();
}

async function loginUser(req, res) {
  try {
    const loggedUser = await usersModel.loginUser(req.body);
    if (loggedUser.length == 1) {
      req.session.user = loggedUser[0];
      res.status(200).json(loggedUser[0]);
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};

const usersModel = require("../models/usersModel");

async function getUsers(req, res) {
  const users = await usersModel.getUsers();
  return res.status(200).json(users);
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

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};

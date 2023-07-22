const usersModel = require("../models/usersModel");

async function addUser(req, res) {
  const createdUser = await usersModel.addUser(req.body);
  return res.status(201).json(createdUser);
}

module.exports = {
  addUser,
};

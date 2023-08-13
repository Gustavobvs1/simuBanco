const accountsModel = require("../models/accountsModel");

async function getAccounts(req, res) {
  const accounts = await accountsModel.getAccounts();
  res.status(200).json(accounts);
}

async function getAccount(req, res) {
  const account = await accountsModel.getAccount(req.params.usuario_id);
  res.status(200).json(account);
}

async function addAccount(req, res) {
  const createdAccount = await accountsModel.addAccount(req.body);
  res.status(200).json(createdAccount);
}

async function updateAccount(req, res) {
  const { id } = req.params;
  await accountsModel.updateAccount(id, req.body);
  res.status(204).json();
}

async function deleteAccount(req, res) {
  const { id } = req.params;
  await accountsModel.deleteAccount(id);
  res.status(204).json();
}

module.exports = {
  getAccounts,
  getAccount,
  addAccount,
  updateAccount,
  deleteAccount,
};

const connection = require("./connection");

async function getAccounts() {
  const [accounts] = await connection.execute("SELECT * FROM contas_bancarias");
  return accounts;
}

async function getAccount(usuario_id) {
  const getAccountQuery = "SELECT * FROM contas_bancarias WHERE usuario_id = ?";
  const [data] = await connection.execute(getAccountQuery, [usuario_id]);
  return data;
}

async function addAccount(account) {
  const { banco, usuario_id, tipo_conta } = account;
  const addQuery =
    "INSERT INTO contas_bancarias(usuario_id, tipo_conta, banco, saldo) VALUES(?, ?, ?, ?)";
  const [createdAccount] = await connection.execute(addQuery, [
    usuario_id,
    tipo_conta,
    banco,
    0.0,
  ]);
  return { insertId: createdAccount.insertId };
}

async function updateAccount(id, account) {
  const { saldo } = account;
  const updateAccountQuery =
    "UPDATE contas_bancarias SET saldo = ? WHERE id = ?";
  const [updatedAccount] = await connection.execute(updateAccountQuery, [
    saldo,
    id,
  ]);
  return updatedAccount;
}

async function deleteAccount(id) {
  const deleteQuery = "DELETE FROM contas_bancarias WHERE id = ?";
  const [deletedAccount] = await connection.execute(deleteQuery, [id]);
  return deletedAccount;
}

module.exports = {
  getAccounts,
  getAccount,
  addAccount,
  updateAccount,
  deleteAccount,
};

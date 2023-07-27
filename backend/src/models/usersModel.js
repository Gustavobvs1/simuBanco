const connection = require("./connection");

async function getUsers() {
  const getQuery = "SELECT * FROM usuarios";
  const [users] = await connection.execute(getQuery);
  return users;
}

async function addUser(user) {
  const { nome, sobrenome, email, senha } = user;
  const insertQuery =
    "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES(?,?,?,?)";

  const [createdUser] = await connection.execute(insertQuery, [
    nome,
    sobrenome,
    email,
    senha,
  ]);
  return { insertId: createdUser.insertId };
}

async function updateUser(id, user) {
  const { nome, sobrenome, email, senha } = user;
  const updateQuery =
    "UPDATE usuarios SET nome = ?, sobrenome = ?, email = ?, senha = ? WHERE id = ?";
  const [updatedUser] = await connection.execute(updateQuery, [
    nome,
    sobrenome,
    email,
    senha,
    id,
  ]);

  return updatedUser;
}

async function deleteUser(id) {
  const deleteQuery = "DELETE FROM usuarios WHERE id = ?";
  const [deletedUser] = await connection.execute(deleteQuery, [id]);
  return deletedUser;
}

async function loginUser(user) {
  const { email, senha } = user;
  const verifyQuery = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
  const [loggedUser] = await connection.execute(verifyQuery, [email, senha]);
  return loggedUser;
}

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};

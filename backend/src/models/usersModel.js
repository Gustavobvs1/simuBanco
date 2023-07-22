const connection = require("./connection");

async function addUser(user) {
  const { name, surname, email, password } = user;
  const insertQuery =
    "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES(?,?,?,?)";

  const [createdUser] = await connection.execute(insertQuery, [
    name,
    surname,
    email,
    password,
  ]);
  return { insertId: createdUser.insertId };
}

module.exports = {
  addUser,
};

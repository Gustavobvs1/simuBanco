function validateName(req, res, next) {
  const { body } = req;
  if (body.nome === undefined) {
    return res.status(400).json({ message: "O campo nome é obrigatório" });
  } else if (body.nome === "") {
    return res
      .status(404)
      .json({ message: "O campo nome não pode estar vazio" });
  }
  next();
}

function validateSurname(req, res, next) {
  const { body } = req;
  if (body.sobrenome === undefined) {
    return res.status(400).json({ message: "O campo sobrenome é obrigatório" });
  } else if (body.sobrenome === "") {
    return res
      .status(404)
      .json({ message: "O campo nome não pode estar vazio" });
  }
  next();
}

function validateEmail(req, res, next) {
  const { body } = req;
  if (body.email === undefined) {
    return res.status(400).json({ message: "O campo email é obrigatório" });
  } else if (body.email === "") {
    return res
      .status(404)
      .json({ message: "O campo email não pode estar vazio" });
  }
  next();
}

function validatePassword(req, res, next) {
  const { body } = req;
  if (body.senha === undefined) {
    return res.status(400).json({ message: "O campo senha é obrigatório" });
  } else if (body.senha === "") {
    return res
      .status(404)
      .json({ message: "O campo senha não pode estar vazio" });
  }
  next();
}

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validateSurname,
};

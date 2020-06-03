import express, { response } from "express";

const app = express();

app.use(express.json()); // use adiciona um plugin para ser utilizado pelo express

// Rota: Endereço completo da requisão => ex: localhost:3333/users
// Recurso: users

// GET: Buscar uma ou mais informações do back-end => Read
// POST: Criar uma nova informação no back-end => Create
// PUT: Atualizar uma informação no back-end => Update
// DELETE: Deletar uma informação no back-end => Delete

// Exemplos:
// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar todos os usuários
// GET http://localhost:3333/users/userId = Buscar dados do usuário com id userId

// Request Param: Parâmetros que vem na própria rota que identificam um recurso => Costuma ser um parâmetro obrigatório para identificar o recurso
// Query Param: Parâmetros que vem na própria rota. Geralmente são parâmetros opcionais, como de um filtro. Vêm após o ?. Ex: http://localhost:3333/users?search=Pietro
// Request Body: Parâmetros para criação/atualização de informações. Ex: Nome, e-mail, etc

const users = ["Pietro", "Julia", "Floppy", "Corgi"];

app.get("/users", (req, res) => {
  const search = String(req.query.search);

  const filteredUsers =
    search != "undefined"
      ? users.filter((user) => user.includes(search))
      : users;
  console.log("Listagem de usuários");

  return res.json(filteredUsers);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users[id];
  return res.json(user);
});

app.post("/users", (req, res) => {
  const data = req.body;
  console.log(data);
  const user = {
    name: data.name,
    email: data.email,
  };

  return res.json(user);
});

app.listen(3333);

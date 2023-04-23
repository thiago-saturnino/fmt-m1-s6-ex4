const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});

app.use(express.json());

app.post("/:name", function (req, res) {
  console.log(`Rota de API criada pelo(a): ${req.params.name}`);
  res.send(`Rota de API criada pelo(a): ${req.params.name}`);
});

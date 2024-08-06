const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");

const app = express();

var tarefaControler = require("./controllers/tarefa-controler")

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", tarefaControler.exibirTarefas);
app.get("/novaTarefa", tarefaControler.exibirNovaTarefa)
app.post("/adicionar", tarefaControler.adicionarTarefa)


// Inicie o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
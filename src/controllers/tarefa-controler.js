var tarefaModel = require("../models/tarefaModel")

function exibirTarefas(request, response) {
    var tarefas = tarefaModel.listarTarefa()
    console.log(tarefas)
    response.render('index')
}



function exibirNovaTarefa(request, response) {
    response.render('novaTarefa')
}



function adicionarTarefa(request, response) {

    console.log('Chegou na adicionarTarefa')

    console.log(request.body)

    var titulo = request.body.titulo;

    var descricao = request.body.descricao;

    tarefaModel.adicionarTarefa(titulo, descricao);

    response.redirect("/")
}

module.exports = {
    exibirTarefas,
    exibirNovaTarefa,
    adicionarTarefa
}
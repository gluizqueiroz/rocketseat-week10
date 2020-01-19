index.js
/*
//Importar o express p/ ter acesso as funcionalidades essa biblioteca
const express = require('express'); //Agora temos o express disponivel dentro de uma variavel chamada "express"
//Importar o mongoose p/ ter acesso as funcionalidades da biblioteca
const mongoose = require('mongoose'); //Agora temos o mongoose diposnivel dentro de uma variavel chamada "express"

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qjgr8.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
//O primeiro parametro é a rota e o segundo é uma função. A função do 2° parametro recebe 2 parametros, o "req" e o "res"
//Request é tudo que vem do frontend, tudo que o cliente nos envia ao fazer uma requisição, como por exemplo, o nome e a idade de uma pessoa ao cadastra-la
//Response é como vamos devolver a resposta do cliente

//Métodos HTTP:
//GET: Usado quando queremos buscar alguma informação (Listar um usuario)
//POST: Usado quando queremos criar alguma coisa (Salvar um produto, criar um usuario)
//PUT: Usado quando queremos editar alguma coisa (Editar um produto já criado)
//Delete: Usado quando queremos apagar alguma coisa

//Tipos de parametros:
//Query Params: Parametros que são passados pela URL. São acessados por: request.query (filtros, ordenação, paginação)
//Route Params: Parametros que são passados pela URL sem nome especifico. São acessados por: request.params (Identificar algo na alteração ou remoção)
//Body: Parametros que são passados pelo corpo da requisição. São acessados por: request.body (Dados p/ criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.send('Semana Omnistack 10'); //O .send retorna um texto, existem diversas opções, como imagens, downloads e outros
});

app.get('/users', (request, response) => {
    return response.json({metodo: 'GET', param: 'Query Param', value: request.query}); //O .json retorna um JSON
});

app.post('/users-cad', (request, response) => {
    return response.json({metodo: 'POST', param: 'Body', value: request.body}) //O .json retorna um JSON
});

app.delete('/users/:id', (request, response) => {
    return response.json({metodo: 'DELETE', param: 'Route Param', value: request.params}); //O .json retorna um JSON
});

app.listen(3333); //Configurar o servidor p/ ouvir a porta 3333
*/
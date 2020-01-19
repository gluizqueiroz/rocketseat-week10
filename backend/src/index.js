const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); //Extrair o http do express
const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app); //Agora temos o servidor http fora do express

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qjgr8.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors()); //Desse jeito vai liberar o acesso externo para todo tipo de aplicação
//app.use(cors({ origin: 'http://localhost:3000' })); //Isso serve para liberar pra esse local, no caso a aplicação React
app.use(express.json()); //É preciso vir antes do app.use(routes). O node lê as coisas em sequencia
app.use(routes);

server.listen(3333); //Configurar o servidor p/ ouvir a porta 3333
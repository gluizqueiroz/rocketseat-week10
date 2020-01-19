const mongoose = require('mongoose');
const pointSchema = require('./utils/pointSchema');

//Informar pro mongo qual as caracteristicas da entidade "dev". Schema é a estruturação dentro de um banco de dados
const devSchema = new mongoose.Schema({ //Vai se repetir toda vez que tiver um model
    //Nome do atributo: Formato que vai ser salvo no banco
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //Armazena varias strings
    location: {
        type: pointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('dev', devSchema); //O primeiro parametro é o nome que o model vai ter, que é o nome como vai ser salvo e o segundo é o schema
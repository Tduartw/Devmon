const express = require('express');
const server = express();
const mongoose = require('mongoose');
const PokemonRegister = require('./src/control/PokemonController');


mongoose.connect('mongodb+srv://pokeproject:pika123@cluster0-xuil4.mongodb.net/pokedex?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

server.post('/register', PokemonRegister.store);





server.use(express.json());
server.listen('3000');
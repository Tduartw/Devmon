const express = require('express');
const server = express();
const mongoose = require('mongoose');
const PokemonRegister = require('./src/control/PokemonController');


mongoose.connect('mongodb://localhost:27017/pokedex', {useNewUrlParser: true, useUnifiedTopology: true});

server.get('/', (req, res) =>{  
    res.send('AI PAI');
    mongoose.model('PokemonRegister').find((err, PokemonRegister)=>{
        res.json(PokemonRegister);
    })
});






server.listen('3000');
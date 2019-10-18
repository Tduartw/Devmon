 const {Schema, model} = require('mongoose');


const PokemonRegister = new Schema({
    name: String,
    id: Number,
    type: String,
    category: String,
    abilities: Array,
    stats:{
        hp: Number,
        attack: Number,
        defense: Number,
        sp: Number,
        sd: Number,
        speed: Number
    },
    weakness: Array,
    evolutions: Array
});


module.exports = model('PokemonRegister', PokemonRegister);



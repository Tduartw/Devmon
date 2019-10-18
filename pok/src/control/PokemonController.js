const PokemonRegister = require('../model/PokemonRegister');

module.exports = {
    async store(req, res){
        const pokedex = await PokemonRegister.create({
            name: "Armando",
            id: 1,
            type: "Frontend",
            category: "programador",
            abilities: ["Algoritimo", "Magento", "CSS"],
            stats: {hp:69, attack: 999, defense: 999, sp: 99999, sd: 99999, speed:30},
            weakness: ["Backend", "Wordpress"],
            evolutions: ["Fullstack", "Devops", "Senior"]
        });

        return res.json(pokedex);
    }
}


async list(req, res){
    const {name} = await req.body;


}
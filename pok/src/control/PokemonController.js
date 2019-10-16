const PokemonRegister = require('../model/PokemonRegister');

module.exports = {
    async store(req, res){
        const pokedex = await PokemonRegister.create({
            name: "Armando",
            id: 1,
            type: "Frontend",
            category: "programador",
            abilities: ["Algoritimo", "Magento", "CSS"],
            stats: [69, 999, 999, 99999, 99999, 30],
            weakness: ["Backend", "Wordpress"],
            evolutions: ["Fullstack", "Devops", "Senior"]
        });

        return res.json(pokedex);
    }
}
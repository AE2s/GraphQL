const Characters = require('./datasources/characters');
const Cities = require('./datasources/cities');

let characters = new Characters();
let cities = new Cities();

module.exports = {
    Query: {
        characters: async () => characters.getAllCharacters(),
        cities: async () => cities.getAllCities()
    }
}
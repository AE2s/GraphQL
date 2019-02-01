const Characters = require('./datasources/characters');

let characters = new Characters();

module.exports = {
    Query: {
        characters: async (parent, args, context, info) => characters.getAllCharacters(),
        character: async (parent, {name}) => characters.getCharacterByName(name)
    }
}
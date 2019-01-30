const client = require('./gameOfThronesApi');

class Characters {

    async getAllCharacters() {
        const characters = await client.get('/characters');

        return Array.isArray(characters.data) ? characters.data.map(character => this.characterReducer(character)) : [];
    }

    characterReducer(character) {
        return {
            id: character._id || 0,
            male: character.male,
            house: character.house,
            slug: character.slug,
            name: character.name,
            books: character.books || [],
            titles: character.titles
        };
    }
}

module.exports = Characters;
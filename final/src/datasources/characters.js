const gameOfThronesApi = require('./gameOfThronesApi');

class Characters {

    async getAllCharacters() {
        const characters = await gameOfThronesApi.get('/characters');
        await this.getCharacterByName("jon%20snow")

        return Array.isArray(characters.data) ? characters.data.map(character => this.characterReducer(character)) : [];
    }

    async getCharacterByName(name) {
        const characters = await gameOfThronesApi.get(`/characters/${name}`);
        return this.characterReducer(characters.data.data);
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
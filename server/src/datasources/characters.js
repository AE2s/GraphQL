const gameOfThronesApi = require('./gameOfThronesApi');

export default class Characters {
  async getAllCharacters() {
    const characters = await gameOfThronesApi.get('/characters');
    return Array.isArray(characters.data)
      ? characters.data.map((character) => this.characterReducer(character))
      : [];
  }

  async getCharacterByName(name) {
    const characters = await gameOfThronesApi.get(`/characters/${name}`);
    console.log(characters);
    return this.characterReducer(characters.data);
  }

  characterReducer(character) {
    return {
      id: character._id || 0,
      male: character.male,
      house: character.house,
      slug: character.slug,
      name: character.name,
      books: character.books || [],
      titles: character.titles,
    };
  }
}

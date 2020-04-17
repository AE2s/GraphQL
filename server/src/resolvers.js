// # resolvers.js
import Characters from './datasources/characters';
import houses from './datasources/houses';

let characters = new Characters();

const resolvers = {
  Query: {
    characters: async (parent, args, context, info) =>
      characters.getAllCharacters(),
    character: async (parent, { name }) => characters.getCharacterByName(name),
    houses: () => houses,
  },
  Mutation: {
    createHouse: (parent, { id, name, words }) => {
      let newHouse = { id, name, words };
      houses.push(newHouse);
      return houses;
    },
    updateHouse: (parent, { id, name, words }) => {
      let houseToUpdate = houses.find((house) => house.id == id);
      houseToUpdate.name = name;
      houseToUpdate.words = words ? words : houseToUpdate.words;
      return houses;
    },
    deleteHouse: (parent, { id }) => {
      let houseIndex = houses.findIndex((house) => house.id == id);
      console.log(houses);

      if (houseIndex === -1) {
        throw new Error('House not found.');
      }

      houses.splice(houseIndex, 1);
      return houses;
    },
  },
};

export default resolvers;

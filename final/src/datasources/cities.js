const client = require('./gameOfThronesApi');

class Cities {

    async getAllCities() {
        const cities = await client.get('/cities');

        return Array.isArray(cities.data) ? cities.data.map(city => this.cityReducer(city)) : [];
    }

    cityReducer(city) {
        return {
            id: city._id || 0,
            name: city.name,
            latitude: city.coordY,
            longitude: city.coordX,
            type: city.type,
            link: city.link
        };
    }
}

module.exports = Cities;
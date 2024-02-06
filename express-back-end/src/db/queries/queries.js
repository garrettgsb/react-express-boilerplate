const db = require('../connection');

const searchGasStationsByPostalCode = (postalCode) => {
    const query = `
      SELECT gs.name, gp.regular_price, gp.premium_price, gp.diesel_price, l.lat, l.lng, gs.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      WHERE l.postal_code = $1;
    `;
    
    return db.query(query, [postalCode])
      .then(data => {
        console.log(data.rows);
        return data.rows;
    });
};
  
const searchGasStationsByCity = (city) => {
    const query = `
      SELECT gs.name, gp.regular_price, gp.premium_price, gp.diesel_price, l.lat, l.lng, gs.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      WHERE l.city = $1;
    `;
    
    return db.query(query, [city])
      .then(data => {
        console.log(data.rows);
        return data.rows;
    });
};

const filterGasStationsByDistance = (userLat, userLng, distance) => {
    const query = `
      SELECT gs.name, gp.regular_price, gp.premium_price, gp.diesel_price, l.lat, l.lng, gs.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      WHERE ST_Distance(
        ST_MakePoint(l.lng, l.lat)::geography,
        ST_MakePoint($2, $1)::geography
      ) <= $3;
    `;
    
    return db.query(query, [userLat, userLng, distance])
      .then(data => {
        console.log(data.rows);
        return data.rows;
    });
};


const sqlQuery = `
    SELECT gs.name, gp.regular_price, gp.premium_price, gp.diesel_price, l.lat, l.lng, gs.rating
    FROM gas_stations gs
    JOIN locations l ON gs.id = l.gas_station_id
    JOIN gas_prices gp ON gs.id = gp.gas_station_id
    WHERE ST_Distance(
        ST_MakePoint(l.lng, l.lat)::geography,
        ST_MakePoint(-123.329773, 48.407326)::geography
    ) <= 10000;
`;






module.exports = {searchGasStationsByCity, searchGasStationsByPostalCode, filterGasStationsByDistance, sqlQuery};
  
  
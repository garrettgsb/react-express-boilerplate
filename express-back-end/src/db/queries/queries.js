const db = require('../connection');

const searchGasStationsByPostalCode = (postalCode) => {
  const query = `
    SELECT
      gs.name,
      gs.vicinity,
      gs.payment_method,
      gs.fuel_type,
      l.lat,
      l.lng,
      gp.regular_price,
      gp.premium_price,
      gp.diesel_price,
      r.rating
    FROM gas_stations gs
    JOIN locations l ON gs.id = l.gas_station_id
    JOIN gas_prices gp ON gs.id = gp.gas_station_id
    LEFT JOIN reviews r ON gs.id = r.gas_station_id
    WHERE l.postal_code ILIKE $1;
  `;
  
  return db.query(query, [`%${postalCode}%`])
    .then(data => {
      return data.rows;
  });
};
// query 2
const searchGasStationsByCity = (city) => {
    const query = `
      SELECT
        gs.name,
        gs.vicinity,
        gs.payment_method,
        gs.fuel_type,
        l.lat,
        l.lng,
        gp.regular_price,
        gp.premium_price,
        gp.diesel_price,
        r.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      LEFT JOIN reviews r ON gs.id = r.gas_station_id
      WHERE l.city ILIKE $1;
    `;

    return db.query(query, [`%${city}%`])
      .then(data => {
        return data.rows;
    });
};
// query 3 
const filterGasStationsByDistance = (lat, lng) => {
    const query = `
    SELECT
      gs.name,
      gs.vicinity,
      gs.payment_method,
      gs.fuel_type,
      l.lat,
      l.lng,
      gp.regular_price,
      gp.premium_price,
      gp.diesel_price,
      r.rating
    FROM gas_stations gs
    JOIN locations l ON gs.id = l.gas_station_id
    JOIN gas_prices gp ON gs.id = gp.gas_station_id
    LEFT JOIN reviews r ON gs.id = r.gas_station_id
    WHERE ST_Distance(
      ST_MakePoint(l.lng, l.lat)::geography,
      ST_MakePoint($1, $2)::geography) <= 10000;
    `;

    return db.query(query, [lng, lat])
      .then(data => {
        return data.rows;
    });
};
// query 4
const searchByPostalCodeFilterByPaymentMethod = (postalCode, paymentMethod) => {
    const query = `
      SELECT
        gs.name,
        gs.vicinity,
        gs.payment_method,
        gs.fuel_type,
        l.lat,
        l.lng,
        gp.regular_price,
        gp.premium_price,
        gp.diesel_price,
        r.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      LEFT JOIN reviews r ON gs.id = r.gas_station_id
      WHERE l.postal_code ILIKE $1 AND gs.payment_method ILIKE $2;
    `;

    return db.query(query,  [`%${postalCode.trim()}%`, `%${paymentMethod}%`])
      .then(data => {
        return data.rows;
    });
};
// query 5
const seachByCityFilterByPaymentMethod = (city, paymentMethod) => {
    const query = `
      SELECT
        gs.name,
        gs.vicinity,
        gs.payment_method,
        gs.fuel_type,
        l.lat,
        l.lng,
        gp.regular_price,
        gp.premium_price,
        gp.diesel_price,
        r.rating
      FROM gas_stations gs
      JOIN locations l ON gs.id = l.gas_station_id
      JOIN gas_prices gp ON gs.id = gp.gas_station_id
      LEFT JOIN reviews r ON gs.id = r.gas_station_id
      WHERE l.city ILIKE $1 AND gs.payment_method ILIKE $2;
    `;

    return db.query(query, [`%${city}%`, `%${paymentMethod}%`])
      .then(data => {
        return data.rows;
    });
};

//query 6
const searchByLocationFilterByPayementMethod = (lat, lng, paymentMethod) => {
  const query = `
    SELECT
      gs.name,
      gs.vicinity,
      gs.payment_method,
      gs.fuel_type,
      l.lat,
      l.lng,
      gp.regular_price,
      gp.premium_price,
      gp.diesel_price,
      r.rating
    FROM gas_stations gs
    JOIN locations l ON gs.id = l.gas_station_id
    JOIN gas_prices gp ON gs.id = gp.gas_station_id
    LEFT JOIN reviews r ON gs.id = r.gas_station_id
    WHERE ST_Distance(
      ST_MakePoint(l.lng, l.lat)::geography,
      ST_MakePoint($1, $2)::geography
    ) <= 10000 AND gs.payment_method ILIKE $3;
  `;

    return db.query(query, [lng, lat, paymentMethod])
      .then(data => {
        return data.rows;
    });
};

//query 7
const searchGasStationsByKeyword = (keyword) => {
  const query = `
    SELECT
      gs.name,
      gs.vicinity,
      gs.payment_method,
      gs.fuel_type,
      loc.lat,
      loc.lng,
      gp.regular_price,
      gp.premium_price,
      gp.diesel_price,
      r.rating
    FROM
      gas_stations gs
    JOIN
      locations loc ON gs.id = loc.gas_station_id
    LEFT JOIN
      gas_prices gp ON gs.id = gp.gas_station_id
    LEFT JOIN
      reviews r ON gs.id = r.gas_station_id
    WHERE
      LOWER(gs.name) LIKE LOWER($1)
      OR LOWER(loc.street) LIKE LOWER($1)
      OR LOWER(loc.city) LIKE LOWER($1)
      OR LOWER(loc.province) LIKE LOWER($1)
      OR LOWER(loc.postal_code) LIKE LOWER($1);
  `;

  return db.query(query, [`%${keyword}%`])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error executing query:', error);
      throw error;
    });
};



//tests
const userLat = 49.88; // lat
const userLng = -119.49; // lng
const paymentMethod = '%debit%'; //payment method
const postalCode= 'n3y 2m7'
const city= 'Victoria'
const keyword= 'shell'







//searchGasStationsByPostalCode(postalCode)
//searchGasStationsByCity(city)
//filterGasStationsByDistance(userLat, userLng)
//searchByPostalCodeFilterByPaymentMethod(postalCode,paymentMethod)
//seachByCityFilterByPaymentMethod(city,paymentMethod)
//searchByLocationFilterByPayementMethod (userLat, userLng, paymentMethod)
searchGasStationsByKeyword(keyword)
  .then(results => {
    console.log('Query results:', results);
  })
  .catch(error => {
    console.error('Error:', error);
  });

module.exports = {
    searchGasStationsByPostalCode,
    searchGasStationsByCity,
    filterGasStationsByDistance,
    searchByPostalCodeFilterByPaymentMethod,
    seachByCityFilterByPaymentMethod,
    searchByLocationFilterByPayementMethod
};

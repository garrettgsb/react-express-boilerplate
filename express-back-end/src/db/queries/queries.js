const db = require('../connection');

const searchGasStationsByPostalCode = (postalCode) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c1e0b27 (updated and test queries)
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
<<<<<<< HEAD
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


//tests
const userLat = 49.88; // lat
const userLng = -119.49; // lng
const paymentMethod = '%debit%'; //payment method
const postalCode= 'n3y 2m7'
const city= 'Victoria'
=======
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
>>>>>>> 4823c8b (queries)






<<<<<<< HEAD

searchGasStationsByPostalCode(postalCode)
//searchGasStationsByCity(city)
//filterGasStationsByDistance(userLat, userLng)
//searchByPostalCodeFilterByPaymentMethod(postalCode,paymentMethod)
//seachByCityFilterByPaymentMethod(city,paymentMethod)
//searchByLocationFilterByPayementMethod (userLat, userLng, paymentMethod)
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
=======
module.exports = {searchGasStationsByCity, searchGasStationsByPostalCode, filterGasStationsByDistance, sqlQuery};
  
  
>>>>>>> 4823c8b (queries)
=======
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


//tests
const userLat = 49.88; // lat
const userLng = -119.49; // lng
const paymentMethod = '%debit%'; //payment method
const postalCode= 'n3y 2m7'
const city= 'Victoria'







searchGasStationsByPostalCode(postalCode)
//searchGasStationsByCity(city)
//filterGasStationsByDistance(userLat, userLng)
//searchByPostalCodeFilterByPaymentMethod(postalCode,paymentMethod)
//seachByCityFilterByPaymentMethod(city,paymentMethod)
//searchByLocationFilterByPayementMethod (userLat, userLng, paymentMethod)
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
>>>>>>> c1e0b27 (updated and test queries)

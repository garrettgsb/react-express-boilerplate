import fetch from 'node-fetch';
import pkg from 'pg';

const { Pool } = pkg;

// Replace with your PostgreSQL connection details
const pool = new Pool({
  user: 'fedamuhammadian',
  host: 'localhost',
  database: 'gas',
  password: 'admin',
  port: 5432,
});

// List of cities with their coordinates
const cities = [
  { name: 'Toronto', lat: 43.70, lng: -79.42 },
  { name: 'Montreal', lat: 45.51, lng: -73.59 },
  { name: 'Vancouver', lat: 49.28, lng: -123.12 },
  { name: 'Calgary', lat: 51.05, lng: -114.07 },
  { name: 'Edmonton', lat: 53.54, lng: -113.49 },
  { name: 'Ottawa', lat: 45.42, lng: -75.69 },
  { name: 'Winnipeg', lat: 49.90, lng: -97.13 },
  { name: 'Quebec City', lat: 46.81, lng: -71.21 },
  { name: 'Hamilton', lat: 43.26, lng: -79.87 },
  { name: 'Kitchener', lat: 43.45, lng: -80.49 },
  { name: 'London', lat: 42.98, lng: -81.23 },
  { name: 'St. Catharines', lat: 43.16, lng: -79.25 },
  { name: 'Halifax', lat: 44.65, lng: -63.58 },
  { name: 'Oshawa', lat: 43.92, lng: -78.86 },
  { name: 'Victoria', lat: 48.43, lng: -123.37 },
  { name: 'Windsor', lat: 42.31, lng: -83.04 },
  { name: 'Saskatoon', lat: 52.13, lng: -106.66 },
  { name: 'Regina', lat: 50.45, lng: -104.61 },
  { name: 'Barrie', lat: 44.39, lng: -79.69 },
  { name: 'St. John\'s', lat: 47.56, lng: -52.71 },
  { name: 'Abbotsford', lat: 49.05, lng: -122.33 },
  { name: 'Sherbrooke', lat: 45.40, lng: -71.90 },
  { name: 'Kelowna', lat: 49.88, lng: -119.49 },
  { name: 'Trois-Rivières', lat: 46.34, lng: -72.54 },
  { name: 'Guelph', lat: 43.55, lng: -80.25 },
  { name: 'Kingston', lat: 44.23, lng: -76.49 },
  { name: 'Sudbury', lat: 46.49, lng: -80.99 },
  { name: 'Chicoutimi', lat: 48.42, lng: -71.06 },
  { name: 'Thunder Bay', lat: 48.40, lng: -89.26 },
  { name: 'Kanata', lat: 45.34, lng: -75.92 },
  { name: 'Red Deer', lat: 52.28, lng: -113.81 },
  { name: 'Nanaimo', lat: 49.16, lng: -123.94 },
  { name: 'Kamloops', lat: 50.67, lng: -120.35 },
  { name: 'Belleville', lat: 44.16, lng: -77.39 },
  { name: 'Fredericton', lat: 45.96, lng: -66.64 },
  { name: 'Chilliwack', lat: 49.16, lng: -121.95 },
  { name: 'Saint John', lat: 45.27, lng: -66.07 },
  { name: 'Moncton', lat: 46.09, lng: -64.80 },
  { name: 'Milton', lat: 43.51, lng: -79.88 },
  { name: 'Sarnia', lat: 42.98, lng: -82.41 },
  { name: 'Saint-Laurent', lat: 45.52, lng: -73.70 },
  { name: 'Maple Ridge', lat: 49.22, lng: -122.60 },
  { name: 'Drummondville', lat: 45.88, lng: -72.48 },
  { name: 'Prince George', lat: 53.92, lng: -122.75 },
  { name: 'Medicine Hat', lat: 50.04, lng: -110.68 },
  { name: 'Norfolk County', lat: 42.84, lng: -80.31 },
  { name: 'Granby', lat: 45.40, lng: -72.73 },
  { name: 'Newmarket', lat: 44.05, lng: -79.46 },
  { name: 'Sault Ste. Marie', lat: 46.51, lng: -84.33 },
  { name: 'Vernon', lat: 50.26, lng: -119.27 },
  { name: 'St. Thomas', lat: 42.78, lng: -81.19 },
  { name: 'Courtenay', lat: 49.69, lng: -125.00 },
  { name: 'Victoriaville', lat: 46.05, lng: -71.97 },
  { name: 'Brandon', lat: 49.85, lng: -99.95 },
  { name: 'Woodstock', lat: 43.13, lng: -80.75 },
  { name: 'Timmins', lat: 48.47, lng: -81.33 },
  { name: 'Dartmouth', lat: 44.67, lng: -63.57 },
  { name: 'Leamington', lat: 42.05, lng: -82.59 },
  { name: 'Grande Prairie', lat: 55.17, lng: -118.79 },
  { name: 'Blainville', lat: 45.66, lng: -73.88 },
  { name: 'Welland', lat: 42.99, lng: -79.25 },
  { name: 'Airdrie', lat: 51.29, lng: -114.01 },
  { name: 'Stouffville', lat: 43.97, lng: -79.25 },
  { name: 'Mascouche', lat: 45.76, lng: -73.61 },
  { name: 'Owen Sound', lat: 44.57, lng: -80.94 },
  { name: 'Rimouski', lat: 48.45, lng: -68.53 },
  { name: 'Prince Albert', lat: 53.20, lng: -105.75 },
  { name: 'Orillia', lat: 44.61, lng: -79.42 },
  { name: 'West Kelowna', lat: 49.86, lng: -119.57 },
  { name: 'Bathurst', lat: 47.62, lng: -65.65 },
  { name: 'Leduc', lat: 53.26, lng: -113.55 },
  { name: 'Rouyn-Noranda', lat: 48.24, lng: -79.03 },
  { name: 'White Rock', lat: 49.03, lng: -122.80 },
  { name: 'Lloydminster', lat: 53.28, lng: -110.00 },
  { name: 'Salaberry-de-Valleyfield', lat: 45.26, lng: -74.13 },
  { name: 'Miramichi', lat: 47.02, lng: -65.46 },
  { name: 'Port Alberni', lat: 49.23, lng: -124.80 },
  { name: 'Penticton', lat: 49.49, lng: -119.59 },
  { name: 'Fort St. John', lat: 56.25, lng: -120.85 },
  { name: 'Grande Prairie', lat: 55.17, lng: -118.79 },
  { name: 'Bolton', lat: 43.87, lng: -79.73 },
  { name: 'Quispamsis', lat: 45.42, lng: -65.95 },
  { name: 'Boucherville', lat: 45.61, lng: -73.43 },
  { name: 'LaSalle', lat: 45.43, lng: -73.61 },
  { name: 'Cranbrook', lat: 49.51, lng: -115.77 },
  { name: 'Midland', lat: 44.75, lng: -79.88 },
  { name: 'Charlottetown', lat: 46.24, lng: -63.14 },
  { name: 'Sept-Îles', lat: 50.20, lng: -66.38 },
  { name: 'Yellowknife', lat: 62.45, lng: -114.38 },
  { name: 'Corner Brook', lat: 48.95, lng: -57.95 },
  { name: 'Fort Erie', lat: 42.92, lng: -78.92 },
  { name: 'Salmon Arm', lat: 50.70, lng: -119.28 },
  { name: 'Port Hope', lat: 43.95, lng: -78.30 },
  { name: 'Cobourg', lat: 43.96, lng: -78.17 },
  { name: 'Amos', lat: 48.56, lng: -78.11 },
  { name: 'L-Ancienne-Lorette', lat: 46.80, lng: -71.35 },
  { name: 'Campbell River', lat: 50.02, lng: -125.24 },
  { name: 'Red Deer County', lat: 52.19, lng: -113.92 },
  { name: 'Brooks', lat: 50.57, lng: -111.89 }
];


// array to store promises for each query
const queryPromises = cities.map(city => {
 
  const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${city.lat},${city.lng}&radius=10000&type=gas_station&key=AIzaSyD4tdfGXq-CBKyMaMSNmo3U8CMMGEhE0vA`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(`Number of results from API for ${city.name}:`, data.results.length);

      const queryPromisesForCity = data.results.map(result => {
        return new Promise((resolve, reject) => {
          const { name, rating, user_ratings_total, vicinity, geometry } = result;
          const { lat, lng } = geometry.location;

          
          const insertQuery = `
            INSERT INTO gas_stations (name, rating, user_ratings_total, vicinity, lat, lng)
            VALUES ($1, $2, $3, $4, $5, $6)
          `;

          const values = [name, rating, user_ratings_total, vicinity, lat, lng];

          pool.query(insertQuery, values, (err, res) => {
            if (err) {
              console.error(`Error inserting data for ${city.name}:`, err);
              reject(err);
            } else {
              console.log(`Data inserted successfully for ${city.name}`);
              resolve(res);
            }
          });
        });
      });

      // Wait for all promises for this city to resolve
      return Promise.all(queryPromisesForCity);
    })
    .catch(error => console.error(`Error fetching data for ${city.name}:`, error));
});

// Wait for all promises for all cities 
Promise.all(queryPromises)
  .finally(() => {
    console.log('Closing the connection pool');
    pool.end(); 
  });

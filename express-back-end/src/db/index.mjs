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

// Example API request URL
const apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.4284,-123.3656&radius=10000&type=gas_station&key=AIzaSyD4tdfGXq-CBKyMaMSNmo3U8CMMGEhE0vA";

// ... (your imports and connection pool setup)

// Make the API request
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Number of results from API:', data.results.length);

    // Create an array to store promises for each query
    const queryPromises = data.results.map(result => {
      return new Promise((resolve, reject) => {
        const { name, rating, user_ratings_total, vicinity, geometry } = result;
        const { lat, lng } = geometry.location;

        // Insert data into PostgreSQL using the pool
        const insertQuery = `
          INSERT INTO gas_stations (name, rating, user_ratings_total, vicinity, lat, lng)
          VALUES ($1, $2, $3, $4, $5, $6)
        `;

        const values = [name, rating, user_ratings_total, vicinity, lat, lng];

        pool.query(insertQuery, values, (err, res) => {
          if (err) {
            console.error('Error inserting data:', err);
            reject(err);
          } else {
            console.log('Data inserted successfully');
            resolve(res);
          }
        });
      });
    });

    // Wait for all promises to resolve before closing the connection pool
    return Promise.all(queryPromises);
  })
  .catch(error => console.error("Error fetching data:", error))
  .finally(() => {
    console.log('Closing the connection pool');
    pool.end(); // Close the connection pool
  });

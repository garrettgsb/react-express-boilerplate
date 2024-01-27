import fs from 'fs';
import path from 'path';
import pgPromise from 'pg-promise';

const pgp = pgPromise();


const connectionString = 'postgresql://fedamuhammadian:admin@localhost:5432/gas';

const db = pgp(connectionString);

const tableName = 'gas_stations';

const query = `SELECT * FROM ${tableName};`;

db.any(query)
  .then(rows => {
    const seedData = rows.map(row => ({
      name: row.name,
      rating: row.rating,
      user_ratings_total: row.user_ratings_total,
      vicinity: row.vicinity,
      lat: row.lat,
      lng: row.lng
    }));

    const createTableSQL = `CREATE TABLE ${tableName} (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      rating NUMERIC,
      user_ratings_total INTEGER,
      vicinity VARCHAR(255),
      lat DOUBLE PRECISION,
      lng DOUBLE PRECISION
    );`;

    const insertDataSQL = pgp.helpers.insert(seedData, ['name', 'rating', 'user_ratings_total', 'vicinity', 'lat', 'lng'], tableName);

    
    const currentModuleUrl = new URL(import.meta.url);
    
    
    const currentDirectory = path.dirname(currentModuleUrl.pathname);

    // path to the seed.sql file 
    const filePath = path.join(currentDirectory, 'gas_station_seed.sql');

    // Write the to the file
    fs.writeFileSync(filePath, createTableSQL + insertDataSQL);

    console.log(`Seed data written to ${filePath}`);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    pgp.end(); 
  });
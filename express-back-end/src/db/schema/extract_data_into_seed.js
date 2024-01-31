import fs from 'fs';
import path from 'path';
import pgPromise from 'pg-promise';

const pgp = pgPromise();

// PostgreSQL connection string
const connectionString = 'postgresql://fedamuhammadian:admin@localhost:5432/fuelbuddy';

const db = pgp(connectionString);

const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);

//  path to the seedfile
const filePath = path.join(currentModuleDir, 'gas_station_seed.sql');

// Read the SQL file
const sqlScript = fs.readFileSync(filePath, 'utf8');

// Execute the SQL commands
db.none(sqlScript)
  .then(() => {
    console.log('SQL script executed successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    pgp.end(); 
  });
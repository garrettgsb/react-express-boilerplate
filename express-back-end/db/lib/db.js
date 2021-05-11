const { Pool } = require('pg');

// Connects to our database
let dbParams = { 
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // connectionString: process.env.DATABASE_URL,
};

// if (process.env.DATABASE_URL) {
//   dbParams.connectionString = process.env.DATABASE_URL;
// } else {
//   dbParams = {
  
//   };
// }
const db = new Pool(dbParams);

db.connect();
module.exports = db;

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
  dbParams.max = process.env.MAXCONNECTIONS;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    max: process.env.MAXCONNECTIONS
  };
}

// PG database client/connection setup
const { Pool } = require('pg');
const pool = new Pool(dbParams);
pool.connect();

// Export Pool for use in queries with query logging attached
module.exports = {
  query: (text, params) => {
    const start = Date.now();
    return pool.query(text, params)
      .then(res => {
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res.rowCount });
        return res;
      });
  }
};

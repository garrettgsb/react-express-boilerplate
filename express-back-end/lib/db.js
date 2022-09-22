let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.PGDATABASE,
  };
}

module.exports = dbParams;

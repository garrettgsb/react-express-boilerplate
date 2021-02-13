require('dotenv').config({ debug: process.env.DEBUG });

const {Pool} = require("pg");
const isProduction = process.env.NODE_ENV === 'production'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
/*
  Using pool is a better option than a single client for apps that have many users who make
  frequent queries to the DB.
  new client connections require authentication and slow down the db
  Postgre is limited to the number of clients at a given time
  Pool allows for reusable pool of clients
*/
const pool = new Pool({
  // connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  user: 'development',
  host: 'localhost',
  database: 'test',
  password: 'development',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// The query function below also logs to the server
module.exports = {
  query: (text, params) => {
    const start = Date.now();
    return new Promise((resolve, reject) => {
      pool.query(text, params)
      .then((res) => {
        const duration = Date.now() - start;
        console.log('query:', {text, duration, rows: res.rowCount})
        return resolve(res)
      })
      .catch((err)=> {
        reject(err)
      });
    })
  },
  end: () => {
    return pool.end
    .then(console.log("Pool has ended"))
  }      
}


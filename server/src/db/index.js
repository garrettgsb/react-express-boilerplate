const {Pool} = require("pg")

/*
  Using pool is a better option than a single client for apps that have many users who make
  frequent queries to the DB.
  new client connections require authentication and slow down the db
  Postgresql is limited to the number of clients at a given time
  Pool allows for reusable pool of clients
*/
const pool = new Pool();

// The query function below also logs to the server
module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      console.log('query:', {text, duration, rows: res.rowCount})
      callback(err, res)
    })
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done)
    })
  }
}


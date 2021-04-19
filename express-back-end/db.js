const Pool = require('pg').Pool;
const { host, user, database, password, port } = require('./config');
// Create a pool instance and pass in our config, which we set in our env vars
const pool = new Pool({
    host,
    user,
    database,
    password,
    port,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0
});
pool.connect().catch(err => console.log('err: ', err.message))
module.exports = {
  query: async (text, params, callback) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    // console.log("executed query", { text, duration, rows: res.rows });
    return res;
  }
};
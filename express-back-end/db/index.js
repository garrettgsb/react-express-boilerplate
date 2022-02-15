const { Pool } = require("pg");
const dbParams = require("./db-params.js");

const pool = new Pool(dbParams);

pool.connect((err,client) => {
  if (!err) {
    console.log('DB in db.index.js connected.\nClient => ', client.user);
    console.log('DB =====> ', client.database);
  } else {
    console.log('Error: ', err);
  }
});

const query = (queryString, queryParams) => {
  console.log('Query String =================>\n', queryString);
  console.log('Query Params =================>\n', queryParams);
  return pool
    .query(queryString, queryParams);
};

module.exports = {
  query
};
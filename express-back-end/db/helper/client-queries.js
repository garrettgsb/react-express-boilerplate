const db = require("../../lib/db");

//all the clients routes queries comes here//

const getClients = () => {
  return db
    .query(`SELECT * FROM clients;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err.message));
};

const getSingleClient = (id) => {
  const queryString = `SELECT * FROM clients
  WHERE id = $1;`;
  const queryValue = [id];

  return db
    .query(queryString, queryValue)
    .then((res) => res.rows[0])
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getClients, getSingleClient };

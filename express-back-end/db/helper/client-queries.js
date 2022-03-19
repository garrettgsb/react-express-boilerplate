const db = require("../../lib/db");
//all the clients routes queries comes here//

//get all the user
const getClients = () => {
  return db
    .query(`SELECT * FROM clients;`)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};
const getSingleClients = () => {
  return db.query(`SELECT * FROM clients 
  WHERE`);
};

//get a

module.exports = { getClients };

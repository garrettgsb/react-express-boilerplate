const db = require('./database');

// test query
const getTestMessage = () => {
  return db.query('SELECT * FROM phil;')
    .then((response) => {
      return response.rows;
    })
    .catch((error) => console.log('err:', error));
};

module.exports = {
  getTestMessage,
};
// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: 'localhost',
  port: 5432,
  user: 'fedamuhammadian',
  password: 'admin',
  database: 'gas'
};

const db = new Pool(dbParams);

db.connect(() => {
  db.query ('select * from gas_stations limit 10', (err, res) => {
    if (!err) {
      console.log (res.rows);
    } else {
      console.log(err.message);
    }
  })
  console.log('Connected to database');

});


db.end;


module.exports = db;

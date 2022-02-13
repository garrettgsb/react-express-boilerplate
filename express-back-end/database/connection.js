const pg = require('pg');
const Client = pg.Client;

const config = {
  user: 'hpocfjui',
  host: 'abul.db.elephantsql.com',
  database: 'hpocfjui',
  password: '5uyplq7OH2Su-nLUeFmEJBDWqjIFOFrz',
  port: 5432
}
const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

module.exports = client;
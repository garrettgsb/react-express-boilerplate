// // load .env data into process.env
// require('dotenv').config();

// // other dependencies
// const chalk = require('chalk');
// const Client = require('pg-native');

// // PG connection setup
// const connectionString = process.env.DATABASE_URL ||
//   `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.DB_PORT}/${process.env.PGDATABASE}`;
// const client = new Client();



// try {
//   console.log(`-> Connecting to PG using ${connectionString} ...`);
//   client.connectSync(connectionString);
// } catch (err) {
//   console.error(chalk.red(`Failed due to error: ${err}`));
//   client.end();
// }

const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.DB_PORT}/${process.env.PGDATABASE}`
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
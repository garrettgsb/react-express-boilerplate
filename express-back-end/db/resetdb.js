// load .env data into process.env
require('dotenv').config();

// other dependencies
const fs = require('fs');
const chalk = require('chalk');
const Client = require('pg-native');

// PG connection setup
const connectionString =
  `postgresql://monke:monke@localhost:5432/trendi?sslmode=disable`;
const client = new Client();
console.log(client);
// Loads the schema files from db/schema
const runSchemaFiles = function () {
  console.log(chalk.cyan(`-> Loading Schema Files ...`));
  const schemaFilenames = fs.readdirSync('./schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    client.querySync(sql);
  }
};

const runSeedFiles = function () {
  console.log(chalk.cyan(`-> Loading Seeds ...`));
  const schemaFilenames = fs.readdirSync('./seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    client.querySync(sql);
  }
};

try {
  console.log(`-> Connecting to PG using ${connectionString} ...`);
  client.connectSync(connectionString);
  runSchemaFiles();
  runSeedFiles();
  client.end();
} catch (err) {
  console.error(chalk.red(`Failed due to error: ${err}`));
  client.end();
}
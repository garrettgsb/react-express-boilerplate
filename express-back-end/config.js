const dotenv = require('dotenv');
dotenv.config();
// Single source to handle all the env vars
module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
};
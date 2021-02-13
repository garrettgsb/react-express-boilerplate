const ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config({ debug: process.env.DEBUG });
}

module.exports = ENV;
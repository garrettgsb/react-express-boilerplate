const ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

module.exports = ENV;
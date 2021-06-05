const express = require('express');
const pg = require('pg');
const { Sequelize } = require('sequelize');

const db = new Sequelize('collabapp', 'labber', 'labber', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('ERROR:', err))

const app = express();
app.use(express.urlencoded());


app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));
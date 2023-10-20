const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const config = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = knex(config);

const PORT = 8080;

// Express Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: 'Seems to work!',
}));

// Sample GET route for questions
app.get('/api/questions', (req, res) => {
  database
    .select('*')
    .from('question')
    .then(rows => {
      // Process the rows
      console.log(rows);
      res.json({ questions: rows });
    })
    .catch(error => {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    })
    .finally(() => {
      // Always close the connection after queries
      database.destroy();
    });
});

app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} 👍`);
});


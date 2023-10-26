// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const config = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = knex(config);
const cors = require("cors");

app.use(cors(
  { origin: "http://localhost:3000" }
));

const PORT = 8080;

// Express Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: 'Seems to work!',
}));

// questions
app.get('/api/questions', (req, res) => {
  database
    .select('*')
    .from('question')
    .orderByRaw('RANDOM()')
    .limit(15)
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
});

// highscores
app.route('/api/high-scores')
  .get((req, res) => {
    database
      .select('*')
      .from('game')
      .then(rows => {
        console.log(rows);
        res.json({ games: rows });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  })
  .post(async (req, res) => {
    const { name, score } = req.body;
    try {
      // Insert the new score into the 'game' table
      const [newScoreId] = await database('game').insert({ nickname: name, score });
      console.log('New score added with ID:', newScoreId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error adding new score:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} 👍`);
});


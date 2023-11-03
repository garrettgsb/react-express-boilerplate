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
app.get('/api/questions/:round', (req, res) => {
  console.log('req.param.round', req.params.round)
  database
    .select('*')
    .from('question')
    .where('roundnumber', req.params.round)
    .orderByRaw('RANDOM()')
    .limit(15)
    .then(rows => {
      // Process the rows
      if (!rows.length) {
        return res.statusMessage(404).json({
          error: 'No questions for the given round'
        })
      }
      // console.log(rows);
      res.json({ questions: rows });
    })
    .catch(error => {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    })
});

// highscores
app.get('/api/high-scores', (req, res) => {
  database

    .select('id', 'nickname', 'score', 'completiontime')
    .from('game')
    .orderBy([
      { column: 'score', order: 'desc' },
      { column: 'completiontime', order: 'asc' }
    ])
    .then(rows => {
      console.log(rows);
      res.json({ games: rows });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/api/high-scores', async (req, res) => {
  const { name, score, completionTime } = req.body;
  console.log('req body:', req.body);
  try {
    // Insert the new score into the 'game' table
    const [newScore] = await database('game').insert({ nickname: name, score, completiontime: completionTime }).returning('*');
    console.log('New score added with ID:', newScore.id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error adding new score:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Endpoint to update a nickname
app.put('/api/high-scores/:id', async (req, res) => {
  const { id } = req.params;
  const { nickname } = req.body;

  try {
    const updatedRows = await database('game').where({ id }).update({ nickname });

    if (updatedRows > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'Nickname not found' });
    }
  } catch (error) {
    console.error('Error updating nickname:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

  // Validations for nickname
  app.get('/validate-nickname', (req, res) => {
    const { nickname } = req.query;
  
    database
      .select('nickname')
      .from('game')
      .where('nickname', nickname)
      .then(rows => {
        if (rows.length > 0) {
          return res.status(400).json({ error: 'Nickname already exists' });
        }
        res.json({ success: true });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  

  app.post('/validate-nickname', (req, res) => {
    const { nickname } = req.body;
  console.log('req.body:', req.body);

 // Trim leading and trailing whitespace
 const trimmedNickname = nickname.trim();

  // Check if the nickname is empty or contains only whitespace
  if (!trimmedNickname || /^\s*$/.test(trimmedNickname)) {
    return res.status(400).json({ error: 'Nickname cannot be empty or contain only whitespace' });
  }

    // Check if the nickname contains only numbers and characters A-Z (case-insensitive)
    if (!/^[0-9A-Z]+$/i.test(trimmedNickname)) {
      return res.status(400).json({ error: 'Nickname must contain only numbers and characters A-Z' });
    }

    if (trimmedNickname.length > 12) {
      return res.status(400).json({ error: 'Nickname is too long' });
    }
  
    // If the nickname passes all validations, respond with success
    res.json({ success: true });
  });
  

app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} 👍`);
});

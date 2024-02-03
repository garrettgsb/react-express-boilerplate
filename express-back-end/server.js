import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Sample GET route
app.get('/api/data', (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

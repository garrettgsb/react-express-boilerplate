const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
>>>>>>>>> Temporary merge branch 2
});

// // Sample GET route
// App.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!",
//   })
// );

// App.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(
//     `Express seems to be listening on port ${PORT} so that's pretty good 👍`
//   );
// });

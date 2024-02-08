// favoritesRoutes.js
import express from 'express';
const router = express.Router();

router.post('/removeAll', (req, res) => {
  // Implement the logic to remove all favorites
  console.log('All favorites removed');
  res.json({ success: true, message: 'All favorites removed.' });
});

export default router;

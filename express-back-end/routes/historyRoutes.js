// historyRoutes.js
import express from 'express';
const router = express.Router();

router.post('/clear', (req, res) => {
  // Implement the logic to clear search history
  console.log('Search history cleared');
  res.json({ success: true, message: 'Search history cleared.' });
});

export default router;

import express from 'express';
const router = express.Router();

// Mock database for demonstration
let settings = {
  notification: 'on',
  distanceUnit: 'miles',
  preciseLocation: 'on'
};

router.post('/notification', (req, res) => {
  settings.notification = req.body.notification;
  res.json({ success: true, settings });
});

router.post('/distanceUnit', (req, res) => {
  settings.distanceUnit = req.body.distanceUnit;
  res.json({ success: true, settings });
});

router.post('/preciseLocation', (req, res) => {
  settings.preciseLocation = req.body.preciseLocation;
  res.json({ success: true, settings });
});

export default router;

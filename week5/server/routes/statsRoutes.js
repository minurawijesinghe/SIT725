// server/routes/statsRoutes.js
const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// Change from /stats to /api/stats to match the server.js prefix
router.get('/api/stats', statsController.getStats);

module.exports = router;
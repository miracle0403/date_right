const express = require('express');
const router = express.Router();

const { setUserPreferences } = require('../controllers/preferenceController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/preferences', verifyToken, setUserPreferences);

module.exports = router;
const express = require('express');
const router = express.Router();

const { getMyIntent } = require('../controllers/matchController');
const { verifyToken } = require('../middleware/authMiddleware');
const { getMatches } = require('../controllers/matchController');

router.get('/my-intent', verifyToken, getMyIntent);
router.get('/matches', verifyToken, getMatches);

module.exports = router;
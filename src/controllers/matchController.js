const { findMatchesByIntent } = require('../services/matchService');

exports.getMyIntent = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await getUserIntent(userId);

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMatches = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await findMatchesByIntent(userId);

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
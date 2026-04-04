const { setPreferences } = require('../services/preferenceService');

exports.setUserPreferences = async (req, res) => {
  try {
    const userId = req.user.id;
    const { preferred_gender, min_age, max_age } = req.body;

    const result = await setPreferences(
      userId,
      preferred_gender,
      min_age,
      max_age
    );

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
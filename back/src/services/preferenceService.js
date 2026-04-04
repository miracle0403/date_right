const { savePreferences } = require('../models/preferenceModel');

exports.setPreferences = (userId, gender, minAge, maxAge) => {
  return new Promise((resolve, reject) => {
    savePreferences(userId, gender, minAge, maxAge, (err, result) => {
      if (err) return reject(err);

      resolve({ message: 'Preferences saved' });
    });
  });
};
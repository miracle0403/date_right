const db = require('../config/db');

exports.savePreferences = (userId, gender, minAge, maxAge, callback) => {
  const query = `
    INSERT INTO preferences (user_id, preferred_gender, min_age, max_age)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [userId, gender, minAge, maxAge], callback);
};
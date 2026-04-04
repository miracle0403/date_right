const db = require('../config/db');

exports.saveAnswer = (userId, questionId, answer, callback) => {
  const query = `
    INSERT INTO answers (user_id, question_id, answer)
    VALUES (?, ?, ?)
  `;

  db.query(query, [userId, questionId, answer], callback);
};

exports.getIntentScore = (userId, callback) => {
  const query = `
    SELECT SUM(o.score) AS totalScore
    FROM answers a
    JOIN options o ON a.option_id = o.id
    WHERE a.user_id = ?
    AND a.question_id IN (1, 2)
  `;

  db.query(query, [userId], callback);
};


exports.getBehaviourScore = (userId, callback) => {
  const query = `
    SELECT SUM(o.score) AS totalScore
    FROM answers a
    JOIN options o ON a.option_id = o.id
    WHERE a.user_id = ?
    AND a.question_id NOT IN (1, 2)
  `;

  db.query(query, [userId], callback);
};
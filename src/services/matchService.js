const db = require('../config/db');
const { getIntentScore } = require('../models/answerModel');
const { getBehaviourScore } = require('../models/answerModel');

// ✅ 1. Get User Intent
exports.getUserIntent = (userId) => {
  return new Promise((resolve, reject) => {
    getIntentScore(userId, (err, results) => {
      if (err) return reject(err);

      const score = results[0].totalScore || 0;

      let intent;

      if (score >= 3) intent = 'serious';
      else if (score >= 1) intent = 'casual';
      else intent = 'fun';

      resolve({ score, intent });
    });
  });
};

// ✅ 2. Find Matches
exports.findMatchesByIntent = async (userId) => {
  try {
    // Get current user's intent
    const { intent } = await exports.getUserIntent(userId);

    const query = `
      SELECT u.id, u.name, u.email,
      SUM(o.score) AS totalScore
      FROM users u
      JOIN answers a ON u.id = a.user_id
      JOIN options o ON a.option_id = o.id
      WHERE a.question_id IN (1, 2)
      AND u.id != ?
      GROUP BY u.id
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [userId], (err, results) => {
        if (err) return reject(err);

        const matches = results.filter(user => {
          let userIntent;

          if (user.totalScore >= 3) userIntent = 'serious';
          else if (user.totalScore >= 1) userIntent = 'casual';
          else userIntent = 'fun';

          return userIntent === intent;
        });

        resolve({
          intent,
          matches
        });
      });
    });

  } catch (err) {
    throw err;
  }
};


exports.getUserBehaviour = (userId) => {
  return new Promise((resolve, reject) => {
    getBehaviourScore(userId, (err, results) => {
      if (err) return reject(err);

      const score = results[0].totalScore || 0;

      let behaviour;

      if (score >= 6) behaviour = 'giver';
      else if (score >= 3) behaviour = 'neutral';
      else behaviour = 'taker';

      resolve({ score, behaviour });
    });
  });
};


exports.findMatchesAdvanced = async (userId) => {
  try {
    const { intent } = await exports.getUserIntent(userId);
    const { behaviour } = await exports.getUserBehaviour(userId);

    const query = `
      SELECT u.id, u.name, u.email,
      SUM(o.score) AS totalScore
      FROM users u
      JOIN answers a ON u.id = a.user_id
      JOIN options o ON a.option_id = o.id
      WHERE u.id != ?
      GROUP BY u.id
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [userId], async (err, results) => {
        if (err) return reject(err);

        const matches = [];

        for (let user of results) {
          // Calculate intent
          let intentScore = user.totalScore || 0;

          let userIntent;
          if (intentScore >= 3) userIntent = 'serious';
          else if (intentScore >= 1) userIntent = 'casual';
          else userIntent = 'fun';

          // TEMP: simulate behaviour (we refine later)
          let userBehaviour = 'neutral';

          // Matching logic
          if (userIntent === intent) {
            if (
              (behaviour === 'giver' && userBehaviour !== 'giver') ||
              (behaviour === 'taker' && userBehaviour !== 'taker') ||
              (behaviour === 'neutral')
            ) {
              matches.push(user);
            }
          }
        }

        resolve({
          intent,
          behaviour,
          matches
        });
      });
    });

  } catch (err) {
    throw err;
  }
};
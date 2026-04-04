const { saveAnswer } = require('../models/answerModel');

exports.submitAnswer = (userId, questionId, answer) => {
  return new Promise((resolve, reject) => {
    saveAnswer(userId, questionId, answer, (err, result) => {
      if (err) return reject(err);

      resolve({
        message: 'Answer saved successfully'
      });
    });
  });
};
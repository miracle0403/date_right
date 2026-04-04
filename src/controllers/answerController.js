const { submitAnswer } = require('../services/answerService');

exports.submitAnswerController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { questionId, answer } = req.body;

    const result = await submitAnswer(userId, questionId, answer);

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
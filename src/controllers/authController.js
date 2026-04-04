const { createUser, loginUserService } = require('../services/authService');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await createUser(name, email, password);

    res.status(201).json({
      message: 'User registered successfully',
      user
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};



exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUserService(email, password);

    res.json(result);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
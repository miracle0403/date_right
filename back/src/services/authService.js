const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/userModel');
const { insertUser } = require('../models/userModel');

exports.createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    insertUser(name, email, hashedPassword, (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, name, email });
    });
  });
};


exports.loginUserService = async (email, password) => {
  return new Promise((resolve, reject) => {
    findUserByEmail(email, async (err, results) => {
      if (err) return reject(err);

      if (results.length === 0) {
        return reject(new Error('User not found'));
      }

      const user = results[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return reject(new Error('Invalid credentials'));
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      resolve({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  });
};
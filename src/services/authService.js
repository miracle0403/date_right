const bcrypt = require('bcrypt');
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
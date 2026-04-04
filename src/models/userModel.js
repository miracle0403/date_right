const db = require('../config/db');

exports.insertUser = (name, email, password, callback) => {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  db.query(query, [name, email, password], callback);
};
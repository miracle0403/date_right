require('dotenv').config({ path: '../../.env' });


const bcrypt = require('bcrypt');
const db = require('../config/db');


const users = [
  { name: 'Kingsley Okorie', email: 'kingsley.okorie01@testapp.com', intent: 'casual' },
  { name: 'Bayo Adekunle', email: 'bayo.adekunle02@testapp.com', intent: 'casual' },
  { name: 'Daniel Ajayi', email: 'daniel.ajayi03@testapp.com', intent: 'casual' },
  { name: 'Femi Ogun', email: 'femi.ogun04@testapp.com', intent: 'casual' },
  { name: 'Kunle Balogun', email: 'kunle.balogun05@testapp.com', intent: 'casual' },
  { name: 'Chinedu Okafor', email: 'chinedu.okafor06@testapp.com', intent: 'fun' },

  { name: 'Tunde Balogun', email: 'tunde.balogun07@testapp.com', intent: 'marriage' },
  { name: 'Ibrahim Sadiq', email: 'ibrahim.sadiq08@testapp.com', intent: 'marriage' },
  { name: 'Chuka Eze', email: 'chuka.eze09@testapp.com', intent: 'marriage' },
  { name: 'Seyi Ogunleye', email: 'seyi.ogunleye10@testapp.com', intent: 'marriage' },

  { name: 'Princess Nwafor', email: 'princess.nwafor13@testapp.com', intent: 'casual' },
  { name: 'Zainab Musa', email: 'zainab.musa14@testapp.com', intent: 'casual' },
  { name: 'Sade Adeyemi', email: 'sade.adeyemi15@testapp.com', intent: 'fun' },

  { name: 'Amaka Obi', email: 'amaka.obi21@testapp.com', intent: 'marriage' },
  { name: 'Elena Martins', email: 'elena.martins22@testapp.com', intent: 'marriage' }
];

const seed = async () => {
  for (let user of users) {
    const hashedPassword = await bcrypt.hash('Pass@1234', 10);

    // Insert user
    db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, hashedPassword],
      (err, result) => {
        if (err) return console.log(err);

        const userId = result.insertId;

        // Map intent → option_id
        let optionId;
        if (user.intent === 'casual') optionId = 1;
        else if (user.intent === 'fun') optionId = 2;
        else optionId = 3;

        // Insert answers (Q1 + Q2)
        db.query(
          'INSERT INTO answers (user_id, question_id, option_id) VALUES (?, 1, ?), (?, 2, ?)',
          [userId, optionId, userId, optionId]
        );
      }
    );
  }
};

seed();
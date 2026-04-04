require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// DB connection
require('./src/config/db');

const authRoutes = require('./src/routes/authRoutes');

const app = express(); // ✅ MUST COME BEFORE app.use

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes); // ✅ NOW it works

// Test route
app.get('/', (req, res) => {
  res.send('Dating App API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const { verifyToken } = require('./src/middleware/authMiddleware');

app.get('/protected', verifyToken, (req, res) => {
  res.json({
    message: 'You accessed a protected route',
    user: req.user
  });
});


const answerRoutes = require('./src/routes/answerRoutes');
const matchRoutes = require('./src/routes/matchRoutes');
const preferenceRoutes = require('./src/routes/preferenceRoutes');

app.use('/api', preferenceRoutes);
app.use('/api', answerRoutes);
app.use('/api', matchRoutes);


app.get('/test-preferences', async (req, res) => {
  const { setPreferences } = require('./src/services/preferenceService');

  const result = await setPreferences(1, 'female', 20, 30);

  res.json(result);
});
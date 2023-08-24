// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { username, apiKey } = req.body;
  try {
    const user = await User.findOne({ username, apiKey });
    if (user) {
      res.json({ message: '¡Bienvenido a Letal Hacks!' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor.' });
  }
});

module.exports = router;

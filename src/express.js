const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { sha256 } = require('crypto-js');
const pool = require('../db');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = sha256(password).toString();


});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = sha256(password).toString();

});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
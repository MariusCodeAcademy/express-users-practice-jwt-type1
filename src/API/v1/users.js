const express = require('express');
// const mysql = require('mysql2/promise');

// const { dbConfig } = require('../../config');

const router = express.Router();

// POST /users/register - create new user,
router.post('/register', async (req, res) => {
  res.json('register user here');
});
// validate with joi
// user bcryptjs to hash a password

// POST /users/login

module.exports = router;

const express = require('express');
const { dbAction } = require('../../utils/dbHelper');
const { hashValue } = require('../../utils/hashHelper');
const { validateRegister } = require('../../utils/validateHelper');

const router = express.Router();

// POST /users/register - create new user,
router.post('/register', validateRegister, async (req, res) => {
  const newUser = {
    email: req.body.email,
    password: hashValue(req.body.password),
  };
  const sql = `
  INSERT INTO users (email, password)
  VALUES ( ?, ? )
  `;
  const dbResult = await dbAction(sql, [newUser.email, newUser.password]);
  if (dbResult === false) {
    return res.status(500).json({ error: 'something went wrong' });
  }
  if (dbResult.affectedRows === 1) {
    return res.json({ msg: 'register success', newUser: newUser.email });
  }
  console.log('no rows affected');
  res.status(500).json({ error: 'something went wrong' });
});
// validate with joi
// user bcryptjs to hash a password

// POST /users/login - authenticate user (email exists, pass match)
// if valid, generate jwt token with 1h exp date
// send token back to user

module.exports = router;

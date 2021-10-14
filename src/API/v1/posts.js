const express = require('express');
const { dbAction } = require('../../utils/dbHelper');
// const { validateRegister } = require('../../utils/validateHelper');

const router = express.Router();
// POST /posts/new - create new post
// validate with joi
// add correct userID
router.post('/new', async (req, res) => {
  // after validation
  const sql = 'INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)';
  const { title, body, userId } = req.body;
  const dbResult = await dbAction(sql, [title, body, userId]);
  if (dbResult === false) {
    return res.status(500).json({ error: 'sideways' });
  }
  res.json({ msg: 'post created', dbResult });
});

// GET /posts/all - list all post from everyone, join user email

// DELETE /posts/:id - delete post with postId === :id, Validate with jwt

// GET /posts - list all posts from current user, using jwt
// validate if request had Authorization: Bearer <token>

module.exports = router;

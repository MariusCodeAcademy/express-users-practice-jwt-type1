const express = require('express');
const { dbAction, dbFail, dbSuccess } = require('../../utils/dbHelper');
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
router.get('/all', async (req, res) => {
  const sql = `
  SELECT posts.postId, posts.title, posts.body, posts.timeStamp, users.email AS author
  FROM posts
  INNER JOIN users
  ON users.userId = posts.userId`;
  const dbResult = await dbAction(sql);
  if (dbResult === false) return dbFail(res);
  dbSuccess(res, dbResult);
});

// DELETE /posts/:id - delete post with postId === :id, Validate with jwt

// GET /posts - list all posts from current user, using jwt
// validate if request had Authorization: Bearer <token>

module.exports = router;

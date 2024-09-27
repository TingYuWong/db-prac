import express from 'express';
import query from './connection.mjs';

const PORT = 3000;
const app = express();

app.use(express.static('./static'));

app.get('/search/:query', async (req, res) => {
  let data = await query(
    'SELECT users.username, comments.comment, boards.board_name FROM comments INNER JOIN boards ON boards.board_id = comments.board_id INNER JOIN users ON users.user_id = comments.user_id WHERE comments.board_id = $1',
    req.params.query
  );
  res.status(200).json({ data });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

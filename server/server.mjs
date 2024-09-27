import express from 'express';
import db from './connection.mjs';

const PORT = 3000;
const app = express();

app.use(express.static('./static'));

app.get('/search/:query', async (req, res) => {
  let collection = db.collection('pets');

  let result = await collection
    .find({ $text: { $search: req.params.query } })
    .sort({ score: { $meta: 'textScore' } })
    .limit(50)
    .toArray();

  res.send(result).status(200);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

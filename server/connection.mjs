import pg from 'pg';
import dotenv from 'dotenv';

// https://node-postgres.com/features/pooling
// If you're working on a web application or other software which makes frequent queries you'll want to use a connection pool.
// The client pool allows you to have a reusable pool of clients you can check out, use, and return.

dotenv.config();
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const query = (...args) => {
  return new Promise((resolve, reject) => {
    pool.connect(async (err, client) => {
      if (err) reject(err);
      let data = await client.query(args[0], [...args].slice(1));
      resolve(data.rows);
      client.release();
    });
  });
};

export default query;

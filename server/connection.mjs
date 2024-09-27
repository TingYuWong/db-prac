import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const client = new MongoClient(process.env.DB_CONNECTION);

let conn;
try {
  conn = await client.connect();
} catch {
  throw new Error('DB Connection Failed.');
}

let db = conn.db('adoption');
export default db;

// pages/api/logs.js
import { connectToDatabase } from '../../lib/mongo';
import logger from '../../lib/logger';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('logs');
      const logs = await collection.find({}).toArray ();
      res.status(200).json(logs);
    } catch (error) {
      logger.error('Error fetching logs from MongoDB', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// pages/api/events.js
import { connectToDatabase } from '../../lib/mongo';
import logger from '../../lib/logger';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('logs');

      // Fetch all events
      const events = await collection.find({}).toArray();

      res.status(200).json(events);
    } catch (error) {
      logger.error('Error fetching events from MongoDB', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// pages/api/pageviews.js
import { connectToDatabase } from '../../lib/mongo';
import logger from '../../lib/logger';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('logs');

      // Aggregate data by URL (nested inside 'data.url')
      const logs = await collection.aggregate([
        { $match: { eventType: 'page_view' } }, // Filter for page_view events
        { $group: { _id: "$data.url", count: { $sum: 1 }, timestamp: { $max: "$timestamp" } } } // Group by URL and count occurrences
      ]).toArray();

      // Format the logs for easier consumption
      const formattedLogs = logs.map(log => ({
        url: log._id,
        count: log.count,
        timestamp: log.timestamp,
      }));

      res.status(200).json(formattedLogs);
    } catch (error) {
      logger.error('Error fetching page views from MongoDB', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

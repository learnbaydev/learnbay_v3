// middleware/logMiddleware.js
import logger from '../lib/logger';
import { connectToDatabase } from '../lib/mongo';

export const logMiddleware = async (req, res, next) => {
  const start = Date.now();

  res.on('finish', async () => {
    const duration = Date.now() - start;
    const log = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration,
      timestamp: new Date(),
      eventType: 'page_view', // Default to page_view, adjust for other event types
      data: {} // Default empty, adjust if needed
    };

    // Adjust for different event types
    if (req.body && req.body.eventType) {
      log.eventType = req.body.eventType;
      log.data = req.body.data || {}; // Capture event-specific data
    }

    logger.info(log);
    await logToMongo(log).catch(err => {
      logger.error('Error logging to MongoDB', err);
    });
  });

  next();
};

const logToMongo = async (log) => {
  const db = await connectToDatabase();
  const collection = db.collection('logs');
  await collection.insertOne(log);
};

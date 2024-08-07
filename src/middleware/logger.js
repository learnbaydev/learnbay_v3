import logger from '../lib/logger';
import { connectToDatabase } from '../lib/mongo';

const logToMongo = async (log) => {
  const db = await connectToDatabase();
  const collection = db.collection('logs');
  await collection.insertOne(log);
};

export const logMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on('finish', async () => {
    const duration = Date.now() - start;
    const log = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration,
      timestamp: new Date(),
    };

    logger.info(log);
    await logToMongo(log);
  });

  next();
};

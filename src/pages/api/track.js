import { logMiddleware } from '../../middleware/logger';

export default function handler(req, res) {
  if (req.method === 'POST') {
    logMiddleware(req, res, async () => {
      res.status(200).json({ message: 'Event logged' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

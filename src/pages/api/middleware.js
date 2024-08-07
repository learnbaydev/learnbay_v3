import { logMiddleware } from '../../middleware/logger';

export default function handler(req, res) {
  logMiddleware(req, res, () => {
    // Your API logic here
    res.status(200).json({ message: 'Hello World' });
  });
}

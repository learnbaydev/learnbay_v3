import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://learnbay:FVTLkxvsYqlGR5pN@payment.kktsxgw.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'logs';

let client;
let db;

export const connectToDatabase = async () => {
  if (db) return db;

  client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = client.db(dbName);
  return db;
};

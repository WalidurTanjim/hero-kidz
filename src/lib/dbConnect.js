import { MongoClient } from 'mongodb';
import envConfig from './envConfig';

const client = new MongoClient(envConfig.MDB_URI);
const database = envConfig.MDB_NAME;

export async function connectToMongoDB() {
     try {
          await client.connect();
          console.log("You successfully connected to MongoDB!");
          return client;
     } catch (err) {
          console.dir(err);
     }
}

const dbConnect = (collection) => {
     const result = client.db(database).collection(collection);
     return result;
}

export default dbConnect;

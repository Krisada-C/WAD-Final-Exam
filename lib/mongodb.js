// /lib/mongodb.js
import { MongoClient } from 'mongodb';

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGO_URI;
const options = {};

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve MongoClient across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use global variables
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

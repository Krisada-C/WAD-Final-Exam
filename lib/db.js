import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    // If connection is already cached, return it
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // Disable mongoose buffering commands when not connected
            useNewUrlParser: true, // Ensure correct parsing of the URI
            useUnifiedTopology: true, // Enable MongoDB's new unified topology layer
        };

        // Start connection attempt and cache the promise
        cached.promise = mongoose.connect(MONGO_URI, opts)
            .then((mongoose) => {
                console.log('MongoDB connected successfully');
                return mongoose;
            }).catch((error) => {
                console.error('MongoDB connection error:', error);
                cached.promise = null; // Reset cached promise in case of error
                throw error; // Rethrow the error to be handled by the calling code
            });
    }

    // Wait for the connection to complete and cache the connection object
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null; // Reset promise on failure
        throw e; // Rethrow to allow further error handling
    }

    return cached.conn;
}

export default dbConnect;

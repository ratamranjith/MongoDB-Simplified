const mongodb = require('mongodb');
const mongoCl = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

let database;

const getDatabase = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error('MONGO_URI environment variable is not set.');
        throw new Error('Database connection string not set.');
    }

    try {
        const client = await mongoCl.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        database = client.db('library');
        console.log('Database connected');
        return database;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error; // Rethrow to ensure Vercel captures the error
    }
};

module.exports = { dbo: getDatabase, ObjectId };

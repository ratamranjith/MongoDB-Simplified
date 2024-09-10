const mongodb = require('mongodb')
const mongoCl = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
require('dotenv').config();

let database;

const getDatabase = async () => {
    const client = await mongoCl.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true);
    database = client.db('library');

    if (!database) {
        console.log("Database not connected");
    }
    return database;



};

module.exports = { dbo: getDatabase, ObjectId };
const mongodb = require('mongodb')
const mongoCl = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

let database;

const getDatabase = async () => {
    const client = await mongoCl.connect('mongodb://127.0.0.1:27017');
    database = client.db('library');

    if (!database) {
        console.log("Database not connected");
    }
    return database;



};

module.exports = { dbo: getDatabase, ObjectId };
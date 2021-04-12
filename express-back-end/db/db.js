// let dbParams = {};
// if (process.env.DATABASE_URL) {
//   dbParams.connectionString = process.env.DATABASE_URL;
// } else {
//   dbParams = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   };
// }

// module.exports = dbParams;

require('dotenv').config();

// example queries below

// queries all tweets with specific id NOT SURE IF USEFUL YET
// db.tweets.find( { id: 1380993859224797200 } ).pretty()

// queries all tweets with location: 'Canada'
// db.tweets.find( { "user.location": "Canada" } ).pretty()

// queries all tweets with sentiment score greater than or equal to a score of 5
// db.tweets.find( { "sentiment.score": { $gte: 5 } } ).pretty()

// create a index text search for tweets: text then query for matching hashtag in all tweets: text fields
// db.tweets.createIndex( { text: "text" } )
// db.tweets.find( { $text: { $search: "\"NDPConvention2021\"" }  } ).pretty()


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tweetmaps.lu2jd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db('trendi').collection('tweets');
  // perform actions on the collection object
  client.close();
});
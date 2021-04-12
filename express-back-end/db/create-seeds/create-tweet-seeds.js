// node create-tweet-seeds.js >> ../seeds/04_tweets.sql
// this transfers objects into psql inserts in a separate file
const data = require('./seedData');

for (let i = 0; i < data.length; i++) {
  const replace = function(text){
    return text.replace(/'/g, '');
  } 
  console.log(
    `INSERT INTO tweets(tweet_id, created_at_date, text, tweeter_id, place_id, hashtag, map_id) 
     VALUES (${data[i].id}, '${data[i].created_at}', '${replace(data[i].text)}', ${i+1}, ${1}, '#NDPConvention2021', ${1});
     `
  )
}

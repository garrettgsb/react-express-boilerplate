// node create-tweeter-seeds.js >> ../seeds/01_tweeters.sql
// this transfers objects into psql inserts in a separate file
const data = require('./seedData');

for (let i = 0; i < data.length; i++) {
  console.log(
    `INSERT INTO tweeters(tweeter_id, screen_name, location, profile_image_url) 
     VALUES (${data[i].user.id}, '${data[i].user.screen_name}', '${data[i].user.location}', '${data[i].user.profile_image_url_https}');
     `
  )
}

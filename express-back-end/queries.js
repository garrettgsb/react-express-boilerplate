const Twit = require('twit');
const Sentiment = require('sentiment');
const needle = require('needle');
const _ = require('lodash');
const { identity } = require('lodash');
const fs = require('fs');
const util = require('util');
const { response } = require('express');
require('dotenv').config()

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.AUTH_ACCESS,
  access_token_secret: process.env.AUTH_SECRET,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
});

const headers = {
  Authorization: `Bearer ${process.env.BEARER_TOKEN}`
}

const calgaryPointRadius = '51.0447,-114.0719,100mi';
const torontoPointRadius = '43.6532,-79.3832,50mi';


// This works, basic search for word
const streamKeyword = function(searchWord) {
  const stream = T.stream('statuses/filter', {
    track: searchWord,
    language: 'en'
  });
  stream.on('tweet', async tweet => {
      console.log(tweet);
  });
}

const streamCanadaBorderBox = function(searchWord) {
  const canada = ['-140.99778', '41.6751050889', '-52.6480987209', '83.23324'];
  
  const stream = T.stream('statuses/filter', {
    track: searchWord,
    language: 'en'
  });

  return stream;
}


const streamUSBorderBox = function(searchWord) {
  const USA = ['-171.791110603', '18.91619', '-66.96466', '71.3577635769'];

  const regexpression = searchWord
  const regex = new RegExp(regexpression, "gi");

  const stream = T.stream('statuses/filter', {
    locations: USA,
    track: '#Trump',
    language: 'en'
  });
  stream.on('tweet', async tweet => {
    if(tweet.text.match(regex)){
      console.log(tweet);
    }
    console.log(tweetCount);
      tweetCount++;
  });
}


const getTweetsFromPointRadius = function(pointRadius) {
  T.get('search/tweets', { q:`#RemoveThePM geocode:${pointRadius}`, count: 10 }, function(err, data, response) {
    console.log(data)
  
    console.log('######################################################################');
    data.statuses.forEach(tweet => {
      console.log(tweet.user);
    })
  })
}


// Canada: 23424775 United States: 23424977 
const getCurrentCanadaTrends = function() {
  //https://api.twitter.com/1.1/trends/place.json
  return new Promise((resolve, reject) => {
    needle.get('https://api.twitter.com/1.1/trends/place.json?id=23424775', {headers: headers}, function(error, response) {
      if(error) reject(error);
      if(!error && response.statusCode === 200){
        resolve(response.body[0].trends);
      }
    });
  })
}

const getCurrentUSATrends = function() {
  //https://api.twitter.com/1.1/trends/place.json
  return new Promise((resolve, reject) => {
    needle.get('https://api.twitter.com/1.1/trends/place.json?id=23424977', {headers: headers}, function(error, response) {
      if (error) reject(error);
      if (!error && response.statusCode === 200) {
        resolve(response.body[0].trends);
      }
    });
  })
}

// const canada = ['-140.99778', '41.6751050889', '-52.6480987209', '83.23324'];
// let stream = T.stream('statuses/filter', {
//   track: '#RemoveThePM',
//   language: 'en'
// });
// stream.on('tweet', async tweet => {
//   console.log('########################### NEW TWEET ###########################');
//     console.log(tweet.text);
//     if (tweet.user){
//       console.log('User location: ', tweet.user.location);
//     }
//     if (tweet.place) {
//       console.log('_______________Place data__________________');
//       console.log(tweet.place)
//     }
//     console.log('######################################################################');
// });

// streamCanadaBorderBox('#RemoveThePM');
// streamUSBorderBox('#Obama');

// const runSingleQuery = function() {
//   const headers = {
//     Authorization: `Bearer ${process.env.BEARER_TOKEN}`
//   }
//   needle.get('https://api.twitter.com/1.1/search/tweets.json?q=%23RemoveThePM%20-filter%3Aretweets%20AND%20-filter%3Areplies&geocode=48.428421,-123.365646,30km',{headers: headers}, function(error, response) {
//     if (!error && response.statusCode == 200)
//     console.log(response.body);
//   });
// }

const senti = new Sentiment();

const runSingleQuery = function(hashtag) {
  const headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`
  }
  needle.get(`https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtag}%20-filter%3Aretweets%20AND%20-filter%3Areplies&geocode=${torontoPointRadius}`,{headers: headers}, function(error, response) {
    if (!error && response.statusCode == 200)
    console.log(response.body);
    console.log(response.body.user);
    console.log('##############################################################################')
    response.body.statuses.forEach(status => {
      // console.log(status.user);
      console.log(status.user);
      console.log(senti.analyze(status.text));
    })
  });
}


// runSingleQuery('NDPConvention2021');
// streamCanadaBorderBox('#NDPConvention2021');
// getCurrentUSATrends()
// runSingleQuery('NYTimesPropaganda');
// streamKeyword('#TRUANON');

module.exports = { streamCanadaBorderBox, getCurrentCanadaTrends, getCurrentUSATrends }
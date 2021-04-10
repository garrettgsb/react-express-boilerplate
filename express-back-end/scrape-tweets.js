const Twit = require('twit');
const Sentiment = require('sentiment');
const needle = require('needle');
const _ = require('lodash');
const { identity } = require('lodash');
const fs = require('fs');
const util = require('util');
require('dotenv').config()

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.AUTH_ACCESS,
  access_token_secret: process.env.AUTH_SECRET,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
});

let tweetsData = []

const pushToTweetsData = function(tweet) {
  let sentiment = new Sentiment();
      let sentimentResult = sentiment.analyze(tweet.text);
      try {
        let tweetData = {
          created_at: tweet.created_at,
          id: tweet.id,
          text: tweet.text,
          user: tweet.user || {},
          geo: tweet.geo,
          coordinates: tweet.coordinates,
          extended_tweet: tweet.extended_tweet.full_text,
          place: tweet.place,
          sentiment: {
            score: sentimentResult.score,
            positive: util.inspect(sentimentResult.positive),
            negative: util.inspect(sentimentResult.negative)
          }
        }
        tweetsData.push(tweetData);
      } catch (error) {
        console.log('no extended tweet');
        let tweetData = {
          created_at: tweet.created_at,
          id: tweet.id,
          text: tweet.text,
          user: tweet.user || {},
          geo: tweet.geo,
          coordinates: tweet.coordinates,
          extended_tweet: null,
          place: tweet.place,
          sentiment: {
            score: sentimentResult.score,
            positive: util.inspect(sentimentResult.positive),
            negative: util.inspect(sentimentResult.negative)
          }
        }
        tweetsData.push(tweetData);
      }
      
      console.log("Match Count", tweetCount);
      tweetCount++;
      
}

const streamCanadaBorderBox = function(searchWord) {
  const canada = ['-140.99778', '41.6751050889', '-52.6480987209', '83.23324'];
  // const regexpression = /(?i)#RemoveThePM(?-i).*/gi
  const regexpression = searchWord
  const regex = new RegExp(regexpression, "gi");
  

  const stream = T.stream('statuses/filter', {
    track: searchWord,
    // locations: canada,
    language: 'en'
  });

  let count = 0;
  stream.on('tweet', async tweet => {
    if (tweet.text.match(regex)) {
      pushToTweetsData(tweet);
    } else {
      try {
        if (tweet.extended_tweet.full_text.match(regex)) {
          pushToTweetsData(tweet);
        }
      } catch (error) {
        console.log('No extended tweet');
      }   
    }

    if (tweetsData.length === 50) {
      const data = util.inspect(tweetsData)
      fs.writeFile('./seedData.js', data, function(err, result) {
        if(err) console.log('error', err);
        stream.stop()
        console.log('Finished writing')
      })
    }
    console.log(tweet);
    console.log("Total Count: ", count);
    count++;
  });
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

const senti = new Sentiment();

const runSingleQuery = function(hashtag) {
  const headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`
  }
  needle.get(`https://api.twitter.com/1.1/search/tweets.json?q=%23${hashtag}%20-filter%3Aretweets%20AND%20-filter%3Areplies&geocode=${calgaryPointRadius}`,{headers: headers}, function(error, response) {
    if (!error && response.statusCode == 200)
    console.log(response.body);
    console.log('##############################################################################')
    response.body.statuses.forEach(status => {
      // console.log(status.user);
      console.log(senti.analyze(status.text));
    })
  });
}


// runSingleQuery('NDPConvention2021');
streamCanadaBorderBox('#NDPConvention2021');

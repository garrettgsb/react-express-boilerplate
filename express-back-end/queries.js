const Twit = require('twit');
const Sentiment = require('sentiment');
require('dotenv').config()

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.AUTH_ACCESS,
  access_token_secret: process.env.AUTH_SECRET,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
});

const calgaryPointRadius = '51.0447,-114.0719,100mi'


const streamCanadaBorderBox = function() {
  const canada = ['-140.99778', '41.6751050889', '-52.6480987209', '83.23324'];
  const stream = T.stream('statuses/filter', {
    locations: canada,
    track: '#RemoveThePM',
    language: 'en'
  });
  stream.on('tweet', async tweet => {
      console.log(tweet);
  });
}

const streamUSBorderBox = function() {
  const USA = ['-171.791110603', '18.91619', '-66.96466', '71.3577635769'];
  const stream = T.stream('statuses/filter', {
    locations: canada,
    track: '#RemoveThePM',
    language: 'en'
  });
  stream.on('tweet', async tweet => {
      console.log(tweet);
  });
}


const getTweetsFromPointRadius = function(pointRadius) {
  T.get('search/tweets', { q:`#RemoveThePM geocode:${pointRadius} -filter:RT`, count: 10 }, function(err, data, response) {
    console.log(data)
  
    console.log('######################################################################');
    data.statuses.forEach(tweet => {
      console.log(tweet.user);
    })
  })
}

// getTweetsFromPointRadius(calgaryPointRadius);
streamCanadaBorderBox()
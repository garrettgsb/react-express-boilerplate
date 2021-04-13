const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const http = require('https');
const LineByLineReader = require('line-by-line')


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => {
  
  const options = {
    host: 'services.swpc.noaa.gov',
    path: '/text/3-day-forecast.txt',
    method: 'GET',
  };
  
  let outputData = "";
  
  const readKpiData = () => {
    
    const request = http.request(options, (response) => {
      response.setEncoding('utf8');
      
      lr = new LineByLineReader(response);
      
      lr.on('error', function (err) {
        console.log('err', err);
      });
      
      let counter = -1;
  
      lr.on('line', function (line) {
        if (counter >= 0) {
          counter += 1
        }
  
        if (counter == 2) {
          outputData += line + "\n"
        }
        if (line.includes('NOAA Kp index breakdown')){
          counter = 0
        }
        if (line.includes('UT') && !line.includes('UTC')) {
          outputData += line + "\n"
        }
      });
      
      lr.on('end', function () {
        console.log(outputData);
        console.log('end');
        // sends output data back to user that asked for it
        res.send(outputData);
      });
      
    });
    
    request.on('error', (e) => {
      console.log('problem with request', e);
      request.abort();
    });
    request.end();
  };
  readKpiData();

});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

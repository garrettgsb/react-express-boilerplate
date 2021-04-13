const http = require('https');
const LineByLineReader = require('line-by-line')

const options = {
  host: 'services.swpc.noaa.gov',
  path: '/text/3-day-forecast.txt',
  method: 'GET',
};

let outputData = ""; 

const readKpiData = () => {
  
  const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    
    lr = new LineByLineReader(res);
    
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
    });
    
  });
  
  req.on('error', (e) => {
    console.log('problem with request', e);
    req.abort();
  });
  req.end();
}
readKpiData();
console.log(outputData)
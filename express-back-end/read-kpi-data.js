const http = require('https');
const LineByLineReader = require('line-by-line')

const options = {
  host: 'services.swpc.noaa.gov',
  path: '/text/3-day-forecast.txt',
  method: 'GET',
};

let data = {};

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
        const arr = line.split(' ')
        const filtArr = arr.filter(element => element.length >= 1)
      
        data = {
          day1: {date:`${filtArr[0]} ${filtArr[1]}`},
          day2: {date:`${filtArr[2]} ${filtArr[3]}`},
          day3: {date:`${filtArr[4]} ${filtArr[5]}`}
        };
        // outputData += line + "\n"
        // console.log('data: ', data)
      }
      if (line.includes('NOAA Kp index breakdown')){
        counter = 0
      }
      if (line.includes('UT') && !line.includes('UTC')) {
        // outputData += line + "\n"
        const arr = line.split(' ')
        const filtArr = arr.filter(element => element.length >= 1)
        console.log('filtArr', filtArr)
        const key = filtArr[0]
        timeArr = [
          '00:00:00Z', 
          '03:00:00Z', 
          '06:00:00Z', 
          '09:00:00Z', 
          '12:00:00Z', 
          '15:00:00Z', 
          '18:00:00Z', 
          '21:00:00Z'
        ]
        data.day1[key] = { time: timeArr[counter-3], kpi: filtArr[1]}
        data.day2[key] = { time: timeArr[counter-3], kpi: filtArr[2]}
        data.day3[key] = { time: timeArr[counter-3], kpi: filtArr[3]}
      }
      console.log('data: ', data)

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


// data: {
//   day1: {date: xxxx, 00UTC: {time:00:00:00Z, kp:x} 
//   day2: {date: xxxx, time{}} 
//   day3: {date: xxxx, time{}} 
// }


// data: {
//   day1: {
//     date: april 14, 
//     "00UTC": {time: '00:00:00Z', kp:2},
//     "03UTC": {time: '03:00:00Z', kp:3},
//     "06UTC": {time: '06:00:00Z', kp:4},
//   }, 
// }
const Express = require('express');
const cors = require('cors')
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const http = require('https');
const LineByLineReader = require('line-by-line')
const cors = require('cors');
const { getMaxListeners } = require('process');
const db = require('./db');
const { user } = require('./config');
require('dotenv').config();







// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cors());

//get user from db for login
App.post('/login', (req, res) => {
  const credentials = JSON.parse(req.body.credentials);
	const email = credentials.email;
	const password = credentials.password;
	if (email && password) {
    const query = `SELECT * FROM photographers WHERE email = $1 AND password = $2`
    db.query(query, [email, password]).then((data) => {
      res.send(data.rows[0])
    }).catch((err) => {
    });
	}
});

//get user for profile page
App.get('/profile/:id', (req,res) => {
  console.log('req.params.id: ', req.params.id)
  const query = `SELECT * FROM photographers WHERE id = $1`
  console.log(req.body);
    db.query(query, [req.params.id]).then((data) => {
      res.send(data.rows[0])
      console.log(data.rows[0])
    }).catch((err) => {
  });
})



// cors configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}

App.use(cors(corsOptions));

// Sample GET route
App.get('/api/data', (req, res) => {
  
  const options = {
    host: 'services.swpc.noaa.gov',
    path: '/text/3-day-forecast.txt',
    method: 'GET',
  };
  
  let data = {}; 
  
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
          const arr = line.split(' ')
          const filtArr = arr.filter(element => element.length >= 1)
        
          data = {
            day1: {date:`${filtArr[0]} ${filtArr[1]}`},
            day2: {date:`${filtArr[2]} ${filtArr[3]}`},
            day3: {date:`${filtArr[4]} ${filtArr[5]}`}
          };
        }
        if (line.includes('NOAA Kp index breakdown')){
          counter = 0
        }
        if (line.includes('UT') && !line.includes('UTC')) {
          let before = line.split(' ')
          let after = before.reduce((r, v) => {
            if (v.toString().match(/\(G\d+\)/)) r[r.length - 1] += ' ' + v;
            else r.push(v);
            return r;
        }, []);
          const filtArr = after.filter(element => element.length >= 1)
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
          data.day1[timeArr[counter-3]] = {kpi: filtArr[1]}
          data.day2[timeArr[counter-3]] = {kpi: filtArr[2]}
          data.day3[timeArr[counter-3]] = {kpi: filtArr[3]}
        }
      });
      
      lr.on('end', function () {
        // need data to come back as json format
        res.json(data)
      });
      
    });
    
    request.on('error', (e) => {
      console.log('problem with request', e);
      request.abort();
    });
    request.end();
  }
  readKpiData();

  // res.json({result: "this is returning back"});

});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

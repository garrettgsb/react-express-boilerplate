const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Databse
const db = require('./config/database')

// Test db

db.authenticate()
    .then(() => console.log('Connection to database has been established successfully.'))
    .catch (error => console.log('Unable to connect to the database. Error:'+ error));


const app = express();

app.get('/', (req, res) => res.send('INDEX'));

//CollabApp Routes
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000;




app.listen(PORT, console.log(`Server started on port, ${PORT}`));
const express = require('express');
const cors = require('cors');
const app = express();
//const engine = require('ejs-mate');
const path = require('path');

//Server settings
//app.set('views', path.join(__dirname, 'views'));
//app.engine('ejs', engine);
//app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/login', require('./routes/login'))
app.use('/api/home', require('./routes/home'))
app.use('/api/edit', require('./routes/edit'))
app.use('/api/signup', require('./routes/signup'))

module.exports = app;
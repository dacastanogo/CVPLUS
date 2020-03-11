const express = require('express');
const cors = require('cors');
const app = express();

//Server settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/login', require('./routes/login'))
app.use('/api/home', require('./routes/home'))
app.use('/api/edit', require('./routes/edit'))
app.use('/api/create', require ('./routes/create'))

module.exports = app;
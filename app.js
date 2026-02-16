var express = require('express');
var app = express();

app.use(express.json())
const shelterRoute = require('./routes/shelter-route');

app.use('/api', shelterRoute)


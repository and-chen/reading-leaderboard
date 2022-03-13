var express = require('express');
var controller = require('./controllers/appController.js');
var routes = require("./routes/appRoute.js");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.use(routes);

var PORT = 8989;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
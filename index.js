var express = require('express');
var app = express();

require("angoose").init(app, {
   'module-dirs':'./app/js',
   'mongo-opts': process.env.MONGO_CONNECTION_STRING,
});

var SampleUser = require('./models/SampleUser.js');

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname + '/app'));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

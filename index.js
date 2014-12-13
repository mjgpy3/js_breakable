var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    this.should.break;
});

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname + '/app'));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

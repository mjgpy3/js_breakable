var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sampleUserSchema = new Schema({
    userId: String,
    github: {
        username: String
    }
});

module.exports = mongoose.model('SampleUser', sampleUserSchema);

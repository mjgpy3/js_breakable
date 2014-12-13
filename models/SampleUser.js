var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sampleUserSchema = new Schema({
    userId: Schema.String,
    github: {
        username: Schema.String
    }
});

mongoose.model('SampleUser', sampleUserSchema);

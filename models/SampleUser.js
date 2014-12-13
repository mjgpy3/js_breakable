var angoose = require('angoose'),
    mongoose = angoose.getMongoose(),
    Schema = mongoose.Schema;

var sampleUserSchema = new Schema({
    userId: String,
    github: {
        username: String
    }
});

module.exports = mongoose.model('SampleUser', sampleUserSchema);

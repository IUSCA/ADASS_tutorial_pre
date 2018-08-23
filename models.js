var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.init = function(cb) {
    mongoose.connect('mongodb://127.0.0.1/ADASS_pre', {
            useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to database");
        cb();
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB at 127.0.0.1!\nPlease make sure mongod is running and try again.\n");
        process.exit(1);
    });
};

var personSchema = mongoose.Schema({
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    date: { type: Date, default: Date.now },

    name: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Number
});

exports.Person  = mongoose.model('Person', personSchema);
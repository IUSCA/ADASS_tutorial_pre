var express = require('express');
var router = express.Router();
var db = require('../models');
var mongoose = require('mongoose');
var conn = mongoose.connection;
var exec = require("child_process").exec;

function runVersionCommand(command, callback) {
    exec(command, function(execError, stdin, stderr) {
        var commandDescription = JSON.stringify(command);
        if (execError && execError.code === 127) {
            callback( {
                notfound: true,
            });
        }
        else if (execError) {
            var runError = new Error("Command failed: " + commandDescription);
            if (stderr) {
                runError.stderr = stderr.trim();
            }
            if (execError) {
                runError.execError = execError;
            }
            callback({
                error: runError,
            });
        }
        else {
            callback({
                version: stdin.toString().split('\n')[0].trim(),
            });
        }
    });
}


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'ADASS 2018 MEAN Tutorial Pre-test' });
});

router.get('/create', function(req, res, next) {
    var person = new db.Person({
        name: 'TestPerson',
        age: 22
    });
    person.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(person);
    });
});

router.get('/read', function(req, res, next) {
    db.Person.find((err, people) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(people);
    });
});

router.get('/version', function(req, res, next) {
    runVersionCommand('npm --version', function(npmresult){
        conn.db.command({serverStatus: 1}, (function(err, info) {
            if (err) next(err);
            var versions = {
                'Node.js' : Number(process.version.match(/^v(\d+\.\d+)/)[1]),
                npm: npmresult.version,
                MongoDB: info.version
            };

            return res.status(200).send(versions);
        }));
    });
})


module.exports = router;

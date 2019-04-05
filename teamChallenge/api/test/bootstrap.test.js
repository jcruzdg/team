var sails = require('sails');
var _ = require('lodash');

global.chai = require('chai');
global.should = chai.should();

before(function (done) {

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(7000);

    sails.lift({
        log: {
            level: 'verbose'
            //level: 'silent'
        },
        hooks: {
            grunt: false
        },
        models: {
            connection: 'default',
            migrate: 'safe'
        },
        datastores: {
            default: {
                adapter: 'sails-mongo',
                url: 'mongodb://localhost:27017/team'
            }
        }

    }, function (err, server) {
        if (err) returndone(err);
        // here you can load fixtures, etc.
        done(err, sails);
    });
});

after(function (done) {
    // here you can clear fixtures, etc.
    if (sails && _.isFunction(sails.lower)) {
        sails.lower(done);
    }
});
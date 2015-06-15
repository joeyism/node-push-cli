#!/usr/bin/env node
'use strict';
var commit = require('commit-cli');
var git = require('./lib/git');
var events = require('events');
var eventEmitter = new events.EventEmitter();
require('colors');

eventEmitter.on('endCommit', function(){
    git.getCurrentBranch().then(function(branch){

        return git.push(branch);

    }).then(function(branch){

        console.log('Push to branch ' + branch.bold + 'successfully');

    }).catch(function(err){

        console.log(err.toString().red);

    });
});

'use strict';
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var Promise = require('promise');

var getCurrentBranch = function(){
    return new Promise(function(resolve, reject){
        exec('git rev-parse --abbrev-ref HEAD', function(err, result){
            if(err){
                reject(err);
            }
            else {
                resolve(result.split("\n").join(""));
            }
        }); 
    });
};

var push = function(branch){
    return new Promise(function(resolve, reject){

        var gitPush = spawn('git', ['push', 'origin',  branch],{stdio: 'inherit' });

        gitPush.on('error', function(){
            reject();
        });
        
        gitPush.on('close', function(){
            resolve(branch);
        });

    });
};


module.exports = {
    getCurrentBranch: getCurrentBranch,
    push: push
};

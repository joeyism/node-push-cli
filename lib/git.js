'use strict';
var exec = require('child_process').exec;
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
        exec('git push origin ' + branch, function(err, result){
            if(err){
                reject(err);
            }
            else {
                resolve(branch);
            }
        }); 
    });
};


module.exports = {
    getCurrentBranch: getCurrentBranch,
    push: push
};

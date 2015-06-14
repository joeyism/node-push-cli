'use strict';

var mockery = require('mockery');
var expect = require('chai').expect;
var git;
var fakeChild = function(error, result){
    return {
        exec: function(cmd, callback){
            callback(error, result);
        }
    };
};

describe('git', function(){

    describe('getCurrentBranch', function(){

        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        });

        it('should successfully return the current branch the user is on', function(done){
            mockery.registerMock('child_process', fakeChild(null, 'develop\n'));
            git = require('../lib/git');
            git.getCurrentBranch().then(function(currentBranch){
                expect(currentBranch).to.equal('develop');
                done();
            });       
        });

        it('should throw an error when getting current branch throws an error', function(done){
            mockery.registerMock('child_process', fakeChild('error','whatever'));
            git = require('../lib/git');
            git.getCurrentBranch().catch(function(error){
                expect(error).to.equal('error');
                done();
            });       
        });
    });

    describe('push', function(){

        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        });

        it('should successfully push', function(done){
            mockery.registerMock('child_process', fakeChild(null, 'doesnt matter'));
            git = require('../lib/git');
            git.push('branch').then(function(branch){
                expect(branch).to.equal('branch');
                done();
            });
        });

        it('should throw an error if exec throws an error', function(done){
            mockery.registerMock('child_process', fakeChild('error', 'doesnt matter'));
            git = require('../lib/git');
            git.push('branch').catch(function(err){
                expect(err).to.equal('error');
                done();
            });
        });

    });
});

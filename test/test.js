var expect = require('expect.js');
var info = require('../');

var fixture = function(path) {
  return require('./fixtures/' + path);
};

describe('npm-git-info', function() {
  it('should detect info from branch specification', function() {
    expect(info(fixture('branch.json'))).to.eql({
      name: 'ember-data',
      version: "2.4.0-beta.1",
      sha: "86f89cbed2a2218368dc652fdb74d8553efaa76c",
      abbreviatedSha: "86f89cbed2",
      ref: "beta"
    });
  });

  it('should detect info from tag specification', function() {
    expect(info(fixture('tag.json'))).to.eql({
      name: 'ember-data',
      version: "2.4.0-beta.1",
      sha: "07ad5fe7e43216c5d9fd70412a9761d6c7164e88",
      abbreviatedSha: "07ad5fe7e4",
      ref: "v2.4.0-beta.1"
    });
  });

  it('should detect info from without specification', function() {
    expect(info(fixture('master.json'))).to.eql({
      name: 'ember-data',
      version: "2.5.0-canary",
      sha: "6188c6830d33dbda55bdb59e971984d5803320cb",
      abbreviatedSha: "6188c6830d",
      ref: undefined
    });
  });

  it('should detect info from not NPM installed package', function() {
    expect(info(fixture('repository.json'))).to.eql({
      name: 'ember-data',
      version: '2.5.0-canary',
      sha: undefined,
      abbreviatedSha: undefined,
      ref: undefined
    });
  });
});

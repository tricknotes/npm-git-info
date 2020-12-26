# npm-git-info

[![Build Status](https://github.com/tricknotes/npm-git-info/workflows/Node%20CI/badge.svg)](https://github.com/tricknotes/npm-git-info/actions?query=workflow%3A%22Node+CI%22)

Retrieves git information from package that installed as NPM package.

## Usage

``` js
var npmGitInfo = require('npm-git-info');

var info = npmGitInfo(require('path/to/package.json'));

info.name           // will be the package name
info.version        // will be the current version
info.sha            // will be the current sha
info.abbreviatedSha // will be the first 10 chars of the current sha
info.ref            // will be the current ref specification
```

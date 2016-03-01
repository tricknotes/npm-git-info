var proto = {
  isInstalledAsNpmPackage: function() {
    return !!this.sha;
  },
  hasVersionInRef: function() {
    return !!(this.ref && this.ref.indexOf(this.version) >= 0);
  }
};

module.exports = function npmGitInfo(package) {
  var info = Object.create(proto);

  info.name = package.name;
  info.version = package.version;
  info.sha = package.gitHead;
  info.abbreviatedSha = package.gitHead && package.gitHead.slice(0, 10);

  var requested = package._requested;
  var type = requested && requested.type;

  switch (type) {
    case 'version':
      info.ref = requested.spec;
      break;

    case 'tag':
      info.ref = package.version;
      break;

    default:
      info.ref = (package._from || '').split('#')[1];
      break;

  }

  return info;
};

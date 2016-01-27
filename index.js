module.exports = function npmGitInfo(package) {
  var info = {
    name: package.name,
    version: package.version,
    sha: package.gitHead,
    abbreviatedSha: package.gitHead && package.gitHead.slice(0, 10),
    ref: (package._from || '').split('#')[1]
  };

  return info;
};

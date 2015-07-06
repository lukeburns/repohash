var ghapi = require('ghapi'),
    crypto = require('crypto');

module.exports = repohash

function repohash(login, repo, auth, cb) {
  if (typeof auth === 'function') {
    cb = auth;
    auth = undefined;
  }
  ghapi('getRepoCommits', login, repo, { auth: auth }, function (err, res, commits) {
    if (err) {
      cb(err);
    } else {
      ghapi('getRepoGitTree', login, repo, commits[0].sha, { auth: auth }, function (err, res, tree) {
        if (err) {
          cb(err);
        } else {
          var shaArray = tree.tree.map(function (leaf) {
            return leaf.sha;
          })
          var sha1 = crypto.createHash('sha1');
          var sum = sha1.update(shaArray.toString()).digest('hex');
          cb(null, sum);
        }
      })
    }
  })
}

var ghapi = require('ghapi'),
    crypto = require('crypto');

module.exports = repohash

function repohash(login, repo, cb) {
  ghapi('getRepoCommits', login, repo, { per_page: 1, auth: { bearer: '39cb607a9ca08d077a595377f913c2138a0e484a' } }, function (err, res, commits) {
    if (err) {
      cb(err);
    } else {
      ghapi('getRepoGitTree', login, repo, commits[0].sha, { auth: { bearer: '39cb607a9ca08d077a595377f913c2138a0e484a' } }, function (err, res, tree) {
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

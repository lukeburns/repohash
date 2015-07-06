var test = require('tape');
var repohash = require('./');

test('consistent hashes', function (t) {
  t.plan(1);
  repohash('octocat', 'hello-worId', function (err, hash1) {
    repohash('lukeburns', 'hello-worId', function (err, hash2) {
      t.equal(hash1, hash2);
    });
  });
});

var test = require('tape');
var repohash = require('./');

repohash('octocat', 'hello-world', function (err, hash1) {
  repohash('lukeburns', 'hello-world', function (err, hash2) {
    console.log('octocat/io.js', hash1)
    console.log('lukeburns/hello-world', hash2)
    console.log('agree?', hash1 === hash2)
  });
});

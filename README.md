# Repo Hash

Get a hash of a Github repository.

## Install

```
npm install repohash
```

## Usage

```javascript
repohash(username, repository)
```

```javascript
var repohash = require('repohash');
repohash('nodejs', 'io.js', function (err, hash1) {
  repohash('joyent', 'node', function (err, hash2) {
    console.log('nodejs/io.js', hash1)
    console.log('joyent/node', hash2)
    console.log('agree?', hash1 === hash2)
  });
});
```

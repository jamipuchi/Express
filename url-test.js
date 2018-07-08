var url = require('url');

var parsedurl = url.parse('http://www.example.com/profile?name=barry');

console.log(parsedurl.protocol);
console.log(parsedurl.host);
console.log(parsedurl.query);

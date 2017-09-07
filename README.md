# alphanumeric-twitter-id
Encoder/decoder for shortening Twitter IDs in an npm module.

I had a project that wanted a human readable/writable ID to identify tweets uniquely. The Twitter tweet ID is a very long number. This converts it to letters and numbers in a somewhat shorter form (9 digits instead of 17). It's not memorable or easy to type but it's shorter.

It is not a one-way hash, it can be decoded as well (another useful characteristic for my purposes). So, it's kinda like base64, only with a focus on being human-readable and not having any special characters.

# Usage

```js
var antwid = require('alphanumeric-twitter-id')
console.log(antwid.encode(904988993288319000))
console.log(antwid.decode('beQRqJj6fwE')
```  

var assert = require('assert');
var alphanumtwid = require('../index.js');

describe('Encode', function() {
  describe("encode(904988993288319000)", function() {
    it('should return beQRqJj6fwE', function() {
      assert.equal(alphanumtwid.encode(904988993288319000), 'beQRqJj6fwE');
    });
  });
});



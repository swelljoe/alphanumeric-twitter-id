var assert = require('assert');
var alphanumtwid = require('../index.js');

describe('Decode', function() {
  describe("decode('beQRqJj6fwE')", function() {
    it('should return 904988993288319000', function() {
      assert.equal(alphanumtwid.decode('beQRqJj6fwE'), 904988993288319000);
    });
  });
});



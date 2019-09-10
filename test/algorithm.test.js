// const assert = require('assert');
const expect = require('chai').expect;

const algorithm = require('../others/algorithm');

describe('#algorithm.js width chai', () => {
  describe('#gcd()', () => {
    it('gcd(15, 5) should return 5', () => {
      const result = algorithm.gcd(15, 5);
      expect(result).to.equal(5);
    });
  });
  describe('#isPowerOf2()', () => {
    it('isPowerOf2(64) should return true', () => {
      const result = algorithm.isPowerOf2(64);
      expect(result).to.equal(true);
    });
    it('isPowerOf2(63) should return false', () => {
      const result = algorithm.isPowerOf2(63);
      expect(result).to.equal(false);
    });
  });
});

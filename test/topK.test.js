// const assert = require('assert');
const expect = require('chai').expect;

const topK = require('../others/topK');

describe('#topK.js width chai', () => {
  describe('#topK()', () => {
    it('topK([1, 2, 3, 4], 3) should return [2, 3, 4]', () => {
      const result = topK([1, 2, 3, 4], 3);
      expect(result).to.have.members([2, 3, 4]);
    });
    it('topK([1, 2, 3, 4], 1) should return [4]', () => {
      const result = topK([1, 2, 3, 4], 1);
      expect(result).to.have.members([4]);
    });
    it('topK([1, 2, 3, 6, 5, 5], 3) should return [5, 5, 6]', () => {
      const result = topK([1, 2, 3, 6, 5, 5], 3);
      expect(result).to.have.members([5, 5, 6]);
    });
  });
});

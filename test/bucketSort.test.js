// const assert = require('assert');
const expect = require('chai').expect;

const bucketSort = require('../sort/bucketSort');
const source = [4, 5, 3, 6, 1, 2, 9, 10];
const target1 = [1, 2, 3, 4, 5, 6, 9, 10];
const target2 = [10, 9, 6, 5, 4, 3, 2, 1];

describe('#bucketSort.js width chai', () => {
  describe('#bucketSort()', () => {
    it(`${source} should deep equal ${source}`, () => {
      expect(source).to.deep.equal(source);
    });
    it(`bucketSort(${source}) should return ${target1}`, () => {
      const result = bucketSort.bucketSort(source);
      expect(result).to.deep.equal(target1);
    });
  });
});

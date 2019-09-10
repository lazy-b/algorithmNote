// const assert = require('assert');
const expect = require('chai').expect;

const heapSort = require('../sort/heapSort');
const source = [4, 5, 3, 6, 1, 2, 9, 10];
const target1 = [1, 2, 3, 4, 5, 6, 9, 10];
const target2 = [10, 9, 6, 5, 4, 3, 2, 1];

describe('#heapSort.js width chai', () => {
  describe('#heapSort()', () => {
    it(`${source} should deep equal ${source}`, () => {
      expect(source).to.deep.equal(source);
    });
    it(`heapSort(${source}) should return ${target1}`, () => {
      const result = [...source];
      heapSort.heapSort(result);
      expect(result).to.deep.equal(target1);
    });
    it(`heapSortReverse(${source}) should return ${target2}`, () => {
      const result = [...source];
      heapSort.heapSortReverse(result);
      expect(result).to.deep.equal(target2);
    });
  });
});

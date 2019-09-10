// const assert = require('assert');
const expect = require('chai').expect;

const countSort = require('../sort/countSort');
const source = [4, 5, 3, 6, 1, 2, 9, 10];
const target1 = [1, 2, 3, 4, 5, 6, 9, 10];
const target2 = [10, 9, 6, 5, 4, 3, 2, 1];

describe('#countSort.js width chai', () => {
  describe('#countSort()', () => {
    it(`${source} should deep equal ${source}`, () => {
      expect(source).to.deep.equal(source);
    });
    it(`countSort1(${source}) should return ${target1}`, () => {
      const result = countSort.countSort1(source);
      expect(result).to.deep.equal(target1);
    });
    it(`countSort2(${source}) should return ${target1}`, () => {
      const result = countSort.countSort2(source);
      expect(result).to.deep.equal(target1);
    });
  });
});

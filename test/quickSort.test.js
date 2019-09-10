// const assert = require('assert');
const expect = require('chai').expect;

const quickSort = require('../sort/quickSort');
const source = [4, 5, 3, 6, 1, 2, 9, 10];
const target = [1, 2, 3, 4, 5, 6, 9, 10];

describe('#quickSort.js width chai', () => {
  describe('#quickSort1()', () => {
    it(`${source} should deep equal ${source}`, () => {
      expect(source).to.deep.equal(source);
    });
    it(`quickSort1(${source}) should return ${target}`, () => {
      const result = [...source];
      quickSort.quickSort1(result);
      expect(result).to.deep.equal(target);
    });
    it(`quickSort2(${source}) should return ${target}`, () => {
      const result = [...source];
      quickSort.quickSort2(result);
      expect(result).to.deep.equal(target);
    });
    it(`quickSort3(${source}) should return ${target}`, () => {
      const result = [...source];
      quickSort.quickSort3(result);
      expect(result).to.deep.equal(target);
    });
  });
});

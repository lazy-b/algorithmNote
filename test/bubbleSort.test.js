// const assert = require('assert');
const expect = require('chai').expect;

const bubbleSort = require('../sort/bubbleSort');
const source = [4, 5, 3, 6, 1, 2, 9, 10];
const target = [1, 2, 3, 4, 5, 6, 9, 10];

describe('#bubbleSort.js', () => {
  describe('#bubbleSort1()', () => {
    it(`bubbleSort1(${source}) should return ${target}`, () => {
      const result = bubbleSort.bubbleSort1(source);

      let pass = true;
      for (let i = 0, len = result.length; i < len; i++) {
        if (result[i] !== target[i]) {
          pass = false;
        }
      }

      if (!pass) {
        throw new Error(`bubbleSort1(${source}) didnot return ${target}`);
      }
    });
  });
});

describe('#bubbleSort.js width chai', () => {
  describe('#bubbleSort1()', () => {
    it(`${source} should deep equal ${source}`, () => {
      expect(source).to.deep.equal(source);
    });
    it(`bubbleSort1(${source}) should return ${target}`, () => {
      const result = bubbleSort.bubbleSort1(source);
      expect(result).to.deep.equal(target);
    });
    it(`bubbleSort2(${source}) should return ${target}`, () => {
      const result = bubbleSort.bubbleSort2(source);
      expect(result).to.deep.equal(target);
    });
    it(`bubbleSort3(${source}) should return ${target}`, () => {
      const result = bubbleSort.bubbleSort3(source);
      expect(result).to.deep.equal(target);
    });
    it(`bubbleSort4(${source}) should return ${target}`, () => {
      const result = bubbleSort.bubbleSort4(source);
      expect(result).to.deep.equal(target);
    });
  });
});

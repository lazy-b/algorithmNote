// const assert = require('assert');
const expect = require('chai').expect;

const BoolmFilter = require('../others/BoolmFilter');
const boolmFilter = new BoolmFilter(1000000, 0.0001);
const urls = ['http://www.baidu.com', 'http://www.midea.com', 'http://www.ergou.com'];

describe('#boolmFilter.js width chai', () => {
  describe('#boolmFilter()', () => {
    it('addItem(urls[0]) should return undefined', () => {
      const result = boolmFilter.addItem(urls[0]);
      expect(result).to.equal(undefined);
    });
    it('addItem(urls[1]) should return undefined', () => {
      const result = boolmFilter.addItem(urls[1]);
      expect(result).to.equal(undefined);
    });
    it('addItem(urls[0]) should return -1', () => {
      const result = boolmFilter.addItem(urls[0]);
      expect(result).to.equal(-1);
    });
    it('isExit(urls[0]) should return true', () => {
      const exist = boolmFilter.isExist(urls[0]);
      expect(exist).to.equal(true);
    });
    it('isExit(urls[2]) should return false', () => {
      const exist = boolmFilter.isExist(urls[2]);
      expect(exist).to.equal(false);
    });
  });
});

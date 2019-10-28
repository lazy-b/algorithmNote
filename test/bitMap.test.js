// const assert = require('assert');
const expect = require('chai').expect;

const BitMap = require('../others/bitMap');
const bitMap = new BitMap();

describe('#bitMap.js width chai', () => {
  describe('#bitMap()', () => {
    it('addMember(5) and then exist(5) should return true', () => {
      bitMap.addMember(5);
      const exist = bitMap.exist(5);
      expect(exist).to.equal(true);
    });
    it('addMember(100) and then exist(100) should return true', () => {
      bitMap.addMember(100);
      const exist = bitMap.exist(100);
      expect(exist).to.equal(true);
    });
    it('addMember(1000000) and then exist(1000000) should return true', () => {
      bitMap.addMember(1000000);
      const exist = bitMap.exist(1000000);
      expect(exist).to.equal(true);
    });
    it('addMember(0) and then exist(0) should return true', () => {
      bitMap.addMember(0);
      const exist = bitMap.exist(0);
      expect(exist).to.equal(true);
    });
    it('addMember(99999999999) and then exist(99999999999) should return true', () => {
      bitMap.addMember(99999999999);
      const exist = bitMap.exist(99999999999);
      expect(exist).to.equal(true);
    });
    it('exist(9999999999) should return false', () => {
      const exist = bitMap.exist(9999999999);
      expect(exist).to.equal(false);
    });
  });
});

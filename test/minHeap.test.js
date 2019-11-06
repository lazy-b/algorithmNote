// const assert = require('assert');
const expect = require('chai').expect;

const MinHeap = require('../others/MinHeap');

describe('#MinHeap.js', () => {
  const minHeap = new MinHeap(6);
  const arr = [5, 7, 9, 1, 3];
  minHeap.init(arr);

  it('minHeap.size should return 5', () => {
    expect(minHeap.size()).to.equal(5);
  });
  it('minHeap.getMin() should return 1', () => {
    expect(minHeap.getMin()).to.equal(1);
  });
  it('minHeap.insert', () => {
    expect(minHeap.insert(0)).to.equal(true);
    expect(minHeap.getMin()).to.equal(0);
    expect(minHeap.insert(10)).to.equal(false);
  });

  it('minHeap.size should return 6', () => {
    expect(minHeap.size()).to.equal(6);
  });
  it('minHeap.removeMin()', () => {
    expect(minHeap.removeMin()).to.equal(0);
    expect(minHeap.removeMin()).to.equal(1);
    expect(minHeap.removeMin()).to.equal(3);
    expect(minHeap.removeMin()).to.equal(5);
    expect(minHeap.removeMin()).to.equal(7);
    expect(minHeap.removeMin()).to.equal(9);
  });
  it('minHeap.getMin() should return null', () => {
    expect(minHeap.getMin()).to.equal(null);
  });
  it('minHeap.size should return 0', () => {
    expect(minHeap.size()).to.equal(0);
  });
  it('minHeap.insert', () => {
    minHeap.insert(5);
    // expect(minHeap.insert(0)).to.equal(true);
    expect(minHeap.getMin()).to.equal(5);
    minHeap.insert(9);
    expect(minHeap.getMin()).to.equal(5);
    minHeap.insert(4);
    expect(minHeap.getMin()).to.equal(4);
    minHeap.insert(3);
    expect(minHeap.getMin()).to.equal(3);
    minHeap.insert(2);
    expect(minHeap.getMin()).to.equal(2);
    expect(minHeap.size()).to.equal(5);

    // expect(minHeap.insert(10)).to.equal(false);
  });
});

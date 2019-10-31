const murmur = require('murmurhash-js');
// 设置位的值
const setBit = (bitMap, bit) => {
  const arrI = ~~(bit / 32);
  const bitI = bit % 32;
  bitMap[arrI] |= 1 << bitI;
};

// 获取位的值
const getBit = (bitMap, bit) => {
  const arrI = ~~(bit / 32);
  const bitI = bit % 32;
  return (bitMap[arrI] &= 1 << bitI);
};

// 布隆过滤器
const BoolmFilter = function(maxCount, errorRate) {
  // const maxCount = maxCount;
  // const errorRate = errorRate;
  // 位图变量的长度 根据公式算出
  const bitSize = Math.ceil(maxCount * (-Math.log(errorRate) / (Math.log(2) * Math.log(2))));
  const hashCount = Math.ceil(Math.log(2) * (bitSize / maxCount));

  this.bitMap = [];
  this.bitSize = bitSize;
  this.hashCount = hashCount;
};

// keyn 是否存在
BoolmFilter.prototype.isExist = function(str) {
  for (let i = 0; i < this.hashCount; i++) {
    const hashValue = murmur.murmur3(str, i);
    const bit = Math.abs(~~(hashValue % this.bitSize));
    const bitValue = getBit(this.bitMap, bit);
    if (bitValue === 0) {
      return false;
    }
  }

  return true;
};

// 添加 key
BoolmFilter.prototype.addItem = function(str) {
  if (this.isExist(str)) {
    return -1;
  }

  for (let i = 0; i < this.hashCount; i++) {
    const hashValue = murmur.murmur3(str, i);
    const bit = Math.abs(~~(hashValue % this.bitSize));
    setBit(this.bitMap, bit);
  }
};

module.exports = BoolmFilter;

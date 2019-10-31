// 位图
const BitMap = function() {
  this.data = [];
};

// 添加一个整数
BitMap.prototype.addMember = function(number) {
  // 存放在数组中的序号
  const i = ~~(number / 32);
  const bitIndex = number % 32;
  this.data[i] = this.data[i] | (1 << bitIndex);
};

// 判断整数是否存在
BitMap.prototype.exist = function(number) {
  // 存放在数组中的序号
  const i = ~~(number / 32);
  const bitIndex = number % 32;
  const exist = this.data[i] & (1 << bitIndex);
  return exist !== 0;
};

module.exports = BitMap;

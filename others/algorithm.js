// getGreatestCommonDivisor 获取最大公约数
const gcd = (a, b) => {
  if (a === b) {
    return a;
  }

  if ((a & 1) === 0 && (b & 1) === 0) {
    return gcd(a >> 1, b >> 1) << 1;
  } else if ((a & 1) === 0) {
    return gcd(a >> 1, b);
  } else if ((b & 1) === 0) {
    return gcd(a, b >> 1);
  } else {
    return gcd(Math.min(a, b), Math.abs(a - b));
  }
};

// 是否是2的整数次幂
const isPowerOf2 = num => {
  return (num & (num - 1)) === 0;
};

// console.log(gcd(10000, 663));

module.exports = {
  gcd,
  isPowerOf2,
};

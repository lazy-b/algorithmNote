const heapSort = require('./heapSort.js');
const bucketSort = arr => {
  // 获取最大值和最小值
  let min = arr[0];
  let max = min;
  arr.forEach(i => {
    i > max && (max = i);
    i < min && (min = i);
  });
  // 总的区间长度
  const d = max - min;

  // 创建桶，并将每个元素放入桶中
  const len = arr.length;
  const buckets = [];
  arr.forEach(item => {
    const i = ~~(((item - min) * (len - 1)) / d);
    if (buckets[i]) {
      buckets[i].push(item);
    } else {
      buckets[i] = [item];
    }
  });

  // 对每个桶内部进行排序
  buckets.forEach(array => {
    heapSort.heapSort(array);
  });

  const result = [];
  buckets.forEach(array => {
    array.forEach(i => result.push(i));
  });

  return result;
};

// const arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
// const result = bucketSort(arr);
// console.log(result);

module.exports = {
  bucketSort,
};

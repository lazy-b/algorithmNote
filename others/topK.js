const MinHeap = require('./MinHeap');
// 求一个数据集中的最大的K个值（可以算非常大的数据集)
const topK = function(arr, k) {
  if (arr.length <= k) {
    return arr;
  }

  const minHeap = new MinHeap(k);
  // 先初始化一个大小为 K 的最小堆
  for (let i = 0; i < k; i++) {
    minHeap.insert(arr[i]);
  }

  for (let i = k, len = arr.length; i < len; i++) {
    // 如果当前元素比最小堆的最小值大，则应该删除最小值并将当前元素加入最小堆
    if (arr[i] > minHeap.getMin()) {
      minHeap.removeMin();
      minHeap.insert(arr[i]);
    }
  }

  // 此时堆里的树就是最大的 k 个数
  return minHeap.print();
};

topK([1, 2, 3, 4, 5, 6, 7], 3);

module.exports = topK;

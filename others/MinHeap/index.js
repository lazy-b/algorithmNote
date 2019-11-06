// 最小堆的下沉调整方法
const shifDown = function(arr, start, len) {
  // 开始位置是父节点索引
  let parentIndex = start;
  // 开始位置节点一定有左孩子，先将最小子节点的索引先设为父节点的左节点
  let minChildIndex = start * 2 + 1;

  while (minChildIndex < len) {
    // 如果有右节点，将 minChildIndex 指向更小的那个孩子节点
    if (minChildIndex + 1 < len && arr[minChildIndex] > arr[minChildIndex + 1]) {
      minChildIndex++;
    }

    // 父节点已经小于等于最小的孩子节点，不再需要调整
    if (arr[parentIndex] <= arr[minChildIndex]) {
      break;
    }

    // 将父节点的值和最小子节点的值互换
    [arr[parentIndex], arr[minChildIndex]] = [arr[minChildIndex], arr[parentIndex]];
    // 并且将父节点的索引指向最小子节点
    parentIndex = minChildIndex;
    // 将最小子节点的索引先设为父节点的左节点
    minChildIndex = 2 * minChildIndex + 1;
  }
};
// 最小堆的上浮调整方法
const shifUp = function(arr, start) {
  let childIndex = start;
  let parentIndex = ~~((childIndex - 1) / 2);
  let temp = arr[childIndex];

  // 如果子节点已经大于父节点，则直接返回
  if (temp >= arr[parentIndex]) {
    return;
  }

  // 子节点索引大于0 且 子节点小于父节点 子节点上浮
  while (childIndex > 0 && temp < arr[parentIndex]) {
    // 只用对子节点赋值就行
    arr[childIndex] = arr[parentIndex];
    // 设置新一轮的父子节点的索引
    childIndex = parentIndex;
    parentIndex = ~~((childIndex - 1) / 2);
  }

  // 循环完成之后，将最后的父节点的值设为插入的值
  arr[parentIndex] = temp;
};

// 最小堆
const MinHeap = function(size) {
  this.heap = []; // 数组
  this.currSize = 0; // 当前大小
  this.maxSize = size; // 最大容量
};

// 将数组初始化为最小堆
MinHeap.prototype.init = function(arr) {
  this.currSize = arr.length;
  let currSize = this.currSize;

  this.heap = [...arr];

  // 堆的最后一个分支节点
  let currPos = ~~((currSize - 2) / 2);
  while (currPos >= 0) {
    // 局部自上向下 下滑调整
    shifDown(this.heap, currPos, currSize - 1);
    currPos--;
  }
};

// 最小堆插入元素
MinHeap.prototype.insert = function(value) {
  // 堆已满
  if (this.currSize === this.maxSize) {
    return false;
  }
  this.heap.push(value);

  // 上浮这最后一个元素到合适的位置
  shifUp(this.heap, this.currSize++);

  return true;
};

// 最小堆移除最小值
MinHeap.prototype.removeMin = function() {
  if (this.currSize < 1) {
    return null;
  }

  const min = this.heap[0];
  // const currSize = this.currSize;
  this.heap[0] = this.heap[this.currSize - 1];
  this.heap.splice(this.currSize-- - 1, 1);

  // 局部自上向下 下滑调整
  shifDown(this.heap, 0, this.currSize);

  return min;
};

// 获取最小堆的大小
MinHeap.prototype.size = function() {
  return this.currSize;
};

// 打印最小堆
MinHeap.prototype.print = function() {
  console.log(this.heap);
  return this.heap;
};

// 获取最小堆的最小值
MinHeap.prototype.getMin = function() {
  if (this.currSize > 0) {
    return this.heap[0];
  }

  return null;
};

module.exports = MinHeap;

// 最小堆的上浮操作
const upAdjust = (arr, start) => {
  let childIndex = arr.length - 1;
  let parentIndex = ~~((childIndex - 1) / 2);

  const temp = arr[childIndex];

  while (childIndex > start && temp < arr[parentIndex]) {
    arr[childIndex] = arr[parentIndex];
    childIndex = parentIndex;
    parentIndex = ~~((parentIndex - 1) / 2);
  }

  arr[childIndex] = temp;
};

// 下沉操作，根据传入的 sort 函数确定是最大堆下沉还是最小堆下沉，默认是最大堆
const downAdjust = (arr, parentIndex, len, sort) => {
  const defaultSort = (a, b) => a > b;
  const customerSort = sort || defaultSort;

  const temp = arr[parentIndex];
  let childIndex = 2 * parentIndex + 1;

  while (childIndex < len) {
    if (childIndex + 1 < len && customerSort(arr[childIndex + 1], arr[childIndex])) {
      childIndex++;
    }

    if (customerSort(temp, arr[childIndex]) || temp === arr[childIndex]) {
      break;
    }

    arr[parentIndex] = arr[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1;
  }

  arr[parentIndex] = temp;
};

const buildHeap = arr => {
  for (let i = ~~((arr.length - 2) / 2); i >= 0; i--) {
    downAdjust(arr, i, arr.length);
  }
};

// 堆排序（升序）
const heapSort = arr => {
  // 构建最大堆
  for (let i = ~~((arr.length - 2) / 2); i >= 0; i--) {
    downAdjust(arr, i, arr.length);
  }

  // 循环将堆顶元素（堆的最大值）移到堆后，调整产生新的堆顶
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    downAdjust(arr, 0, i);
  }
};

// 堆排序（降序）
const heapSortReverse = arr => {
  const sort = (a, b) => a < b;
  // 构建最小堆
  for (let i = ~~((arr.length - 2) / 2); i >= 0; i--) {
    downAdjust(arr, i, arr.length, sort);
  }

  // 循环将堆顶元素（堆的最小值）移到堆后，调整产生新的堆顶
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    downAdjust(arr, 0, i, sort);
  }
};

// const arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
// heapSort(arr);
// console.log(arr);
// heapSortReverse(arr);
// console.log(arr);

module.exports = {
  heapSort,
  heapSortReverse,
};

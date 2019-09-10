// 一轮左右分治，并且返回中点位置
const partition1 = (arr, start, end) => {
  // 取第一个位置（也可以选择随机位置）
  let pivot = arr[start];
  let left = start;
  let right = end;

  while (right != left) {
    // 先控制 right 指针比较并且左移
    while (left < right && arr[right] > pivot) {
      right--;
    }

    // 再控制 left 指针比较并且右移
    while (left < right && arr[left] <= pivot) {
      left++;
    }

    // 交换 left 和 right 指针所指向的元素
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  // 交换基准位置和指针重合位置
  [arr[start], arr[left]] = [arr[left], arr[start]];

  // 返回中点的位置
  return left;
};

// 快排算法 1
const quickSort1 = (arr, start = 0, end = arr.length - 1) => {
  // 递归结束条件：start 大于等于 end
  if (start >= end) {
    return;
  }

  // 获得基准位置
  const pivot = partition1(arr, start, end);
  // 根据基准位置，对左右两部分进行递归排序
  quickSort1(arr, start, pivot - 1);
  quickSort1(arr, pivot + 1, end);
};

// 一轮左右分治，并且返回中点位置
const partition2 = (arr, start, end) => {
  // 取第一个位置（也可以选择随机位置）
  let pivot = arr[start];
  let mark = start;

  // 使用 while 循环实现
  // let i = start + 1;

  // while (i <= end) {
  //   i++;
  //   if (arr[i] < pivot) {
  //     mark++;
  //     [arr[i], arr[mark]] = [arr[mark], arr[i]];
  //   }
  // }

  // 使用 for 循环实现
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      mark++;
      [arr[i], arr[mark]] = [arr[mark], arr[i]];
    }
  }

  // 交换基准位置和指针重合位置
  [arr[start], arr[mark]] = [arr[mark], arr[start]];

  // 返回中点的位置
  return mark;
};

// 快排算法 2
const quickSort2 = (arr, start = 0, end = arr.length - 1) => {
  // 递归结束条件：start 大于等于 end
  if (start >= end) {
    return;
  }

  // 获得基准位置
  const pivot = partition2(arr, start, end);
  // 根据基准位置，对左右两部分进行递归排序
  quickSort1(arr, start, pivot - 1);
  quickSort1(arr, pivot + 1, end);
};

// 快排算法 3 非递归
const quickSort3 = (arr, start = 0, end = arr.length - 1) => {
  const stack = [{ start, end }];

  // 获得基准位置
  let positon = stack.pop();
  while (positon) {
    const s = positon.start;
    const e = positon.end;
    const pivot = partition2(arr, s, e);
    if (pivot - 1 > s) {
      stack.push({ start: s, end: pivot - 1 });
    }

    if (pivot + 1 < end) {
      stack.push({ start: pivot + 1, end: e });
    }

    positon = stack.pop();
  }
};

// const test = quickSort3([1, 2, 3, 5, 4]);
// console.log(test);

module.exports = {
  quickSort1,
  quickSort2,
  quickSort3,
};

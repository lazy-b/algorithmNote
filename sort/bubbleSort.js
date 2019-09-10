// 冒泡排序算法 1
const bubbleSort1 = arr => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// 冒泡排序算法 2
const bubbleSort2 = arr => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let sorted = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }

    // 已经有序
    if (sorted) {
      break;
    }
  }

  return arr;
};

// 冒泡排序算法 3
const bubbleSort3 = arr => {
  const len = arr.length;
  let flag = len;
  let sortBorder = len - 1;
  for (let i = 0; i < len - 1; i++) {
    let sorted = true;
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
        flag = j;
      }
    }

    sortBorder = flag;

    // 已经有序
    if (sorted) {
      break;
    }
  }

  return arr;
};

// 冒泡排序算法 4 - 鸡尾酒排序
const bubbleSort4 = arr => {
  const len = arr.length;
  let min = 0;
  let max = len - 1;
  // 正向
  let turn = true;
  // 有序区标志位，较少无用循环
  let flag = len;
  while (max >= min) {
    let sorted = true;
    // 正向轮
    if (turn) {
      for (let i = min; i < max; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
          sorted = false;
          flag = i;
        }
      }

      max = flag;
      // max--;
      // 逆向轮
    } else {
      for (let i = max; i > min + 1; i--) {
        if (arr[i - 1] > arr[i]) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
          sorted = false;
          flag = i;
        }
      }

      min = flag;
      // min++;
    }

    // 反向
    turn = !turn;

    // 提前结束排序
    if (sorted) {
      break;
    }
  }

  return arr;
};

module.exports = {
  bubbleSort1,
  bubbleSort2,
  bubbleSort3,
  bubbleSort4,
};

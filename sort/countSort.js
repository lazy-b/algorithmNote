// 计数排序
const countSort1 = arr => {
  // 获取最大值和最小值
  let min = arr[0];
  let max = min;
  arr.forEach(i => {
    i > max && (max = i);
    i < min && (min = i);
  });

  // 创建统计数组并统计对应元素的个数
  const countArr = [];
  arr.forEach(i => {
    countArr[i - min] = (countArr[i - min] || 0) + 1;
  });

  // 遍历统计数组，输出结果
  const result = [];
  countArr.forEach((i, index) => {
    while (i > 0) {
      result.push(index + min);
      i--;
    }
  });

  return result;
};
// 计数排序2
const countSort2 = arr => {
  // 获取最大值和最小值
  let min = arr[0];
  let max = min;
  arr.forEach(i => {
    i > max && (max = i);
    i < min && (min = i);
  });

  // 创建统计数组并统计对应元素的个数
  const countArr = [];
  arr.forEach(i => {
    countArr[i - min] = (countArr[i - min] || 0) + 1;
  });

  // 统计数组做变形，后面的元素等于前面的元素之和
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = (countArr[i - 1] || 0) + (countArr[i] || 0);
  }

  // 倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const countIndex = arr[i] - min;
    result[countArr[countIndex] - 1] = arr[i];
    countArr[countIndex]--;
  }

  return result;
};

// const arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
// const result = countSort2(arr);
// console.log(result);

module.exports = {
  countSort1,
  countSort2,
};

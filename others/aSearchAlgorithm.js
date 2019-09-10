// A 星寻路算法
// 地图
const MAZE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// const MAZE = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

const Grid = function(x, y) {
  this.x = x;
  this.y = y;
};

Grid.prototype.initGrid = function(parent, end) {
  this.parent = parent;

  if (parent) {
    this.g = parent.g + 1;
  } else {
    this.g = 1;
  }

  this.h = Math.abs(this.x - end.x) + Math.abs(this.y - end.y);
  this.f = this.g + this.h;
};

// 查找当次的最小值
const findMindGrid = openList => {
  let min = openList[0];
  openList.forEach(grid => {
    if (Grid.f < min.f) {
      min = grid;
    }
  });

  return min;
};

const containGrid = (grids, x, y) => {
  return grids.some(grid => grid.x === x && grid.y === y);
};

const isValidGrid = (x, y, openList, closeList) => {
  // 越界
  if (x < 0 || x >= MAZE.length || y < 0 || y >= MAZE[0].length) {
    return false;
  }

  // 障碍物
  if (MAZE[x][y] === 1) {
    return false;
  }

  if (containGrid(openList, x, y)) {
    return false;
  }

  if (containGrid(closeList, x, y)) {
    return false;
  }

  return true;
};

const findNeighbors = (grid, openList, closeList) => {
  const gridList = [];
  let x = grid.x;
  let y = grid.y;

  if (isValidGrid(x, y - 1, openList, closeList)) {
    gridList.push(new Grid(x, y - 1));
  }

  if (isValidGrid(x, y + 1, openList, closeList)) {
    gridList.push(new Grid(x, y + 1));
  }

  if (isValidGrid(x - 1, y, openList, closeList)) {
    gridList.push(new Grid(x - 1, y));
  }

  if (isValidGrid(x + 1, y, openList, closeList)) {
    gridList.push(new Grid(x + 1, y));
  }

  return gridList;
};

const removeTarget = (arr, target) => {
  const index = arr.indexOf(target);
  arr.splice(index, 1);
};

// 寻路主逻辑
// @param Grid start  迷宫起点
// @param Grid end  迷宫终点
const aStarSearch = (start, end) => {
  const openList = [];
  const closeList = [];

  // 循环检查直到抵达终点或者用完 openList
  openList.push(start);
  // 主循环，每一轮检查一个当前方格节点
  while (openList.length > 0) {
    // 在openList中查找 F 值最小的节点，将其作为当前方格节点
    const current = findMindGrid(openList);
    // 将当前方格节点从 openList 中移除
    removeTarget(openList, current);
    closeList.push(current);

    // 找到当前节点的所有临近节点
    const neighbors = findNeighbors(current, openList, closeList);

    neighbors.forEach(grid => {
      // 临近节点不在 openList 中的，
      // 标记 父节点、G、H、F，并放入 openList
      if (openList.indexOf(grid) < 0) {
        grid.initGrid(current, end);
        openList.push(grid);
      }
    });

    // 如果终点在 openList 中，直接返回终点格子
    for (let i = 0, len = openList.length; i < len; i++) {
      const grid = openList[i];
      if (grid.x === end.x && grid.y === end.y) {
        return grid;
      }
    }
  }

  // openList 用尽，仍然找不到终点，说明终点不可到达，返回空
  return null;
};

const start = new Grid(2, 1);
// const end = new Grid(2, 5);
const end = new Grid(10, 9);

let result = aStarSearch(start, end);

const path = [];
while (result) {
  path.push(new Grid(result.x, result.y));
  result = result.parent;
}

MAZE.forEach((row, i) => {
  let rowStr = '';
  row.forEach((col, j) => {
    if (containGrid(path, i, j)) {
      rowStr += '*, ';
    } else {
      rowStr += col + ', ';
    }
  });

  console.log(rowStr);
  // console.log('\n');
});

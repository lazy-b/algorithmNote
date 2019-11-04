const Stack = require('./Stack');
// 节点
const BinTreeNode = function(data) {
  this.data = data; // 数据
  this.leftChild = null; // 左孩子
  this.rightChild = null; // 右孩子
  this.parentNode = null; // 父节点
};

// 二叉树类
const BinaryTree = function() {
  this.root = null; // 根节点
};

// 初始化二叉树
BinaryTree.prototype.initTree = function(str) {
  const stack = new Stack();
  let k = 0; // 标识识别的是左子树还是右子树
  let newNode = null;

  outer: for (let i = 0, len = str.length; i < len; i++) {
    const letter = str[i];
    switch (letter) {
      case '#':
        break outer;
      case '(':
        stack.push(newNode);
        k = 1;
        break;
      case ',':
        k = 2;
        break;
      case ')':
        stack.pop();
        break;
      default:
        newNode = new BinTreeNode(letter);

        if (this.root === null) {
          this.root = newNode;
        } else {
          // 说明 newNode 是左孩子
          if (k === 1) {
            const topItem = stack.top();
            topItem.leftChild = newNode;
            newNode.parentNode = topItem;
          } else if (k === 2) {
            const topItem = stack.top();
            topItem.rightChild = newNode;
            newNode.parentNode = topItem;
          }
        }
        break;
    }
  }
};

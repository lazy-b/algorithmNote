// 栈
const Stack = function() {
  this.items = [];
};

// 压入元素
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// 弹出栈顶元素
Stack.prototype.pop = function(item) {
  return this.items.pop();
};

// 返回栈顶元素
Stack.prototype.top = function(item) {
  return this.items[this.items.length - 1];
};

// 判断栈是否为空
Stack.prototype.isEmpty = function(item) {
  return this.items.length === 0;
};

// 返回栈的大小
Stack.prototype.size = function(item) {
  return items.length;
};

// 清空栈
Stack.prototype.clear = function(item) {
  this.items = [];
};

module.exports = Stack;

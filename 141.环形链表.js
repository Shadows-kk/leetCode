// 解法一 用集合存储
var hasCycle = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return false;
};
// 解法二 定义2个指针完成套圈
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (head && head.next) {
    fast = head.next.next;
    slow = head.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

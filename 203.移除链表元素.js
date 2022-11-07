// 解法一
var removeElements = function (head, val) {
  // 定义哨兵节点
  const ele = {
    next: head,
  };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return ele.next;
};

// 解法二 递归
var removeElements = function (head, val) {
  if (head == null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

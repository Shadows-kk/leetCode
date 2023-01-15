var invertTree = function (root) {
  // 中止条件
  if (root == null) {
    return root;
  }
  // 翻转
  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
  return root;
};

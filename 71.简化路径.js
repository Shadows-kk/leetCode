/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  //"/a/./b/../../c/"
  let stack = [];
  const arr = path.split("/");
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    if (p === "..") {
      stack.pop();
    } else if (p && p !== ".") {
      // .情况下什么都不需要干
      stack.push(p);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end

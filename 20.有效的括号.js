/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一 替换字符串
// var isValid = function (s) {
//   const len = s.length / 2;
//   for (let i = 0; i < len; i++) {
//     s = s.replace("()", "").replace("{}", "").replace("[]", "");
//   }
//   return s.length === 0;
// };
// 方法二 栈匹配
var isValid = function (s) {
  let stack = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in obj) {
      stack.push(ele);
    } else {
      // 反括号情况 开始出栈匹配
      if (ele !== obj[stack.pop()]) {
        return false;
      }
    }
  } 
  // 入栈但是没弹出也是false 如({[
  return !stack.length;
};
// @lecode=end

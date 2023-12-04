/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 方式一：递归方式
  // if (n <= 1) {
  //   return n;
  // } else {
  //   return fib(n - 1) + fib(n - 2);
  // }

  // 方式二
  //  确定dp[i] = dp[i-1] + dp[i-2]
  // 初始值 [0,1]
  // let dp = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  // 方式三 增加一个备忘录，缓存中间的计算结果
  let memo = [];
  return helper(memo, n);
};
function helper(memo, n) {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}
// @lc code=end

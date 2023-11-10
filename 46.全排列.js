/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 递归公示
function backTrack(list, temp, nums) {
  // 终止条件
  if (temp.length === nums.length) {
    list.push([...temp]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    // 递归向下
    backTrack(list, temp, nums);
    // 回溯一次
    temp.pop();
  }
}
var permute = function (nums) {
  let list = [];
  backTrack(list, [], nums);
  return list;
};
// @lc code=end

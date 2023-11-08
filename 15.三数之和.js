/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []; //边界条件
  let list = [];
  // 对数组排序，最小+最大的和对比目标值。比目标值大要缩小值。比目标值小要增大值
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    // nums[i]为基准，找到另外两个数组的和为-nums[i]的组合
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (right === i) {
        right--; //越过nums[i]
      } else if (nums[i] + nums[left] + nums[right] === 0) {
        //  直接命中
        list.push([nums[i], nums[left], nums[right]]);
        // 继续向后查找
        while (nums[left] === nums[left + 1]) {
          // 遇到相同值，跳过
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        // 值偏大
        right--;
      } else {
        // 值偏小
        left++;
      }
    }
  }
  return list;
};
// @lc code=end

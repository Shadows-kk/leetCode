// 解法一
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 解法二 （空间换时间）
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const n = target - num;
    if (num in o) {
      return [o[num], i];
    } else {
      o[n] = i;
    }
  }
};

// 异或处理相同数字

var singleNumber = function (nums) {
  let res = 0;
  nums.forEach((element) => {
    res ^= element;
  });
  return res;
};

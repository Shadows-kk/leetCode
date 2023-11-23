/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveNums = 0;
  let tenNums = 0;
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      fiveNums++;
    } else if (bill === 10) {
      if (fiveNums > 0) {
        fiveNums--;
        tenNums++;
      } else {
        return false;
      }
    } else {
      // 20
      if (tenNums > 0 && fiveNums > 0) {
        tenNums--;
        fiveNums--;
      } else if (fiveNums >= 3) {
        fiveNums -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

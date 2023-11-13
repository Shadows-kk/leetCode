/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 输入的终止条件
  if (board.length === 0) return false;
  if (word.length === 0) return true;
  // 开始循环查找
  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个字母都可以作为起点搜索
      const res = canFind(i, j, 0); //0是word的第一个字母位置
      if (res) {
        return res;
      }
    }
  }
  return false;
  // 递归函数
  function canFind(i, j, cur) {
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;
    const letter = board[i][j]; //当前选择的字母
    // 查询结束判断，当前选择的字母与目标字母不一致
    if (letter !== word[cur]) return false;
    // 匹配成功，匹配到目标的最后一个字符
    if (cur === word.length - 1) return true;
    board[i][j] = null; //当前选择的值，置空避免重复选择
    const res =
      canFind(i, j + 1, cur + 1) ||
      canFind(i, j - 1, cur + 1) ||
      canFind(i + 1, j, cur + 1) ||
      canFind(i - 1, j, cur + 1);
    board[i][j] = letter; //回溯
    return res;
  }
};
// @lc code=end

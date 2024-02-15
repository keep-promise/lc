// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。


var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  let res = '';
  for(let i = 0; i<s.length; i++) {
    helper(i, i);
    helper(i , i+1);
  }
  function helper(m, n) {
    while(m>0 && n<s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    if (n-m-1 > res.length) {
      res = s.slice(m, n);
    }
  }
  return res;
}

// 算法思想
// 1. 循环遍历字符串，
// 2. 对每个字符两边开始对比是否相等，直到对应字符不相等或查到边界（左为0，右为s.length-1)
//    考虑奇数、偶数情况
//    遍历完成，对比缓存的回文串长度，去最大值
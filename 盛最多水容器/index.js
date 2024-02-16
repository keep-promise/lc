// 11. 盛最多水的容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量

var maxArea = function(height) {
  const len = height.length;
  let l = 0;
  let r = len-1;
  let max = 0;
  while(l<r) {
    const currentArea = (r-l) * Math.min(height[l], height[r]);
    max = Math.max(currentArea, max);
    if (height[l] < height[r]) {
      l++
    } else {
      r--;
    }
  }
  return max;
}

// 从两边开始向中间移动0、len-1

// 循环，找到最新的高度，即为容器的高度minH
// 此时盛水容器为minH*(r-l)
// 与之前最大的容器比较，取最大值缓存

// 如果最小高度在左边，左指针右移，l++
// 最小高度在右边，右指针左移，r--
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length;
    nums = [1, ...nums, 1];
    const dp = Array(n + 2).fill(0).map(() => Array(n + 2).fill(0));
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left + len - 1 <= n; left++) {
            const right = left + len - 1;
            for (let k = left; k <= right; k++) {
                const coins = nums[left - 1] * nums[k] * nums[right + 1];
                dp[left][right] = Math.max(dp[left][right],
                    dp[left][k - 1] + coins + dp[k + 1][right]);
            }
        }
    }
    return dp[1][n];
};

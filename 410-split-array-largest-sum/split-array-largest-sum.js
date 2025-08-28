/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums), right = nums.reduce((a, b) => a + b, 0);

    function canSplit(mid) {
        let sum = 0, count = 1;
        for (let num of nums) {
            if (sum + num > mid) {
                sum = num;
                count++;
                if (count > k) return false;
            } else {
                sum += num;
            }
        }
        return true;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canSplit(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
};

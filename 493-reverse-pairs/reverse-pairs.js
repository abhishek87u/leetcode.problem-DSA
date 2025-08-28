/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    function mergeSort(l, r) {
        if (l >= r) return 0;
        let mid = Math.floor((l+r)/2), count = mergeSort(l, mid) + mergeSort(mid+1, r);

        let j = mid+1;
        for (let i = l; i <= mid; i++) {
            while (j <= r && nums[i] > 2 * nums[j]) j++;
            count += j - (mid+1);
        }

        let temp = [], i=l, k=mid+1;
        while (i <= mid && k <= r) {
            if (nums[i] <= nums[k]) temp.push(nums[i++]);
            else temp.push(nums[k++]);
        }
        while (i <= mid) temp.push(nums[i++]);
        while (k <= r) temp.push(nums[k++]);

        for (let i=0; i<temp.length; i++) nums[l+i] = temp[i];
        return count;
    }
    return mergeSort(0, nums.length-1);
};

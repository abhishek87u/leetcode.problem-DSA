/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let dp = [];
    for (let [, h] of envelopes) {
        let l = 0, r = dp.length;
        while (l < r) {
            let mid = (l + r) >> 1;
            if (dp[mid] < h) l = mid + 1;
            else r = mid;
        }
        dp[l] = h;
    }
    return dp.length;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    function count(prefix, n) {
        let curr = prefix, next = prefix + 1, cnt = 0;
        while (curr <= n) {
            cnt += Math.min(n + 1, next) - curr;
            curr *= 10;
            next *= 10;
        }
        return cnt;
    }

    let prefix = 1;
    k--;
    while (k > 0) {
        let cnt = count(prefix, n);
        if (k >= cnt) {
            k -= cnt;
            prefix++;
        } else {
            k--;
            prefix *= 10;
        }
    }
    return prefix;
};

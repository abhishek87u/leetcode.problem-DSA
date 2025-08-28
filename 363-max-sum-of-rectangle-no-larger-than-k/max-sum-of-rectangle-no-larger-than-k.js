/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let m = matrix.length, n = matrix[0].length, res = -Infinity;

    for (let left = 0; left < n; left++) {
        let rowSum = new Array(m).fill(0);
        for (let right = left; right < n; right++) {
            for (let i = 0; i < m; i++) rowSum[i] += matrix[i][right];

            let set = [0], sum = 0;
            for (let r of rowSum) {
                sum += r;
                let target = sum - k;

                let idx = set.findIndex(x => x >= target);
                if (idx !== -1) res = Math.max(res, sum - set[idx]);

                let pos = set.findIndex(x => x > sum);
                if (pos === -1) set.push(sum);
                else set.splice(pos, 0, sum);
            }
        }
    }
    return res;
};

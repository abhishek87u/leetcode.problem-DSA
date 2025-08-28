/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let memo = Array.from({length: m}, () => Array(n).fill(0));
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    function dfs(i, j) {
        if (memo[i][j]) return memo[i][j];
        let maxLen = 1;
        for (let [dx, dy] of dirs) {
            let x = i + dx, y = j + dy;
            if (x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] > matrix[i][j]) {
                maxLen = Math.max(maxLen, 1 + dfs(x, y));
            }
        }
        memo[i][j] = maxLen;
        return maxLen;
    }

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }
    return res;
};

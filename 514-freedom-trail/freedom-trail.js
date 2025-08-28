/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let m = ring.length, n = key.length;
    let pos = {};
    for (let i=0;i<m;i++) {
        if (!pos[ring[i]]) pos[ring[i]]=[];
        pos[ring[i]].push(i);
    }
    let memo = new Map();

    function dfs(i, j) {
        if (j === n) return 0;
        let keyStr = i+"#"+j;
        if (memo.has(keyStr)) return memo.get(keyStr);

        let res = Infinity;
        for (let p of pos[key[j]]) {
            let dist = Math.abs(i-p);
            dist = Math.min(dist, m-dist);
            res = Math.min(res, dist+1+dfs(p,j+1));
        }
        memo.set(keyStr,res);
        return res;
    }
    return dfs(0,0);
};

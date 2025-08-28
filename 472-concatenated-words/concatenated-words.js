/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set(words);
    let res = [];

    function canForm(word) {
        let n = word.length, dp = Array(n+1).fill(false);
        dp[0] = true;

        for (let i = 1; i <= n; i++) {
            for (let j = (i===n?1:0); j < i; j++) {
                if (dp[j] && set.has(word.slice(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }

    for (let word of words) {
        if (word.length && canForm(word)) res.push(word);
    }
    return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let l1 = expand(s, i, i), l2 = expand(s, i, i + 1);
        let len = Math.max(l1, l2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

function expand(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) l--, r++;
    return r - l - 1;
}

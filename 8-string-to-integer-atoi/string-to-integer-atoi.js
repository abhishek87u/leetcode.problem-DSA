/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let match = s.match(/^([+-]?\d+)/);
    let num = match ? parseInt(match[0]) : 0;
    return Math.max(-(2 ** 31), Math.min(num, 2 ** 31 - 1));
};

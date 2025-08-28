/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let res = [], visited = new Set(), queue = [s];
    visited.add(s);

    let found = false;
    while (queue.length) {
        let level = [];
        for (let str of queue) {
            if (isValid(str)) {
                res.push(str);
                found = true;
            }
            if (found) continue;

            for (let i = 0; i < str.length; i++) {
                if (str[i] !== '(' && str[i] !== ')') continue;
                let next = str.slice(0, i) + str.slice(i + 1);
                if (!visited.has(next)) {
                    visited.add(next);
                    level.push(next);
                }
            }
        }
        if (found) break;
        queue = level;
    }
    return res;
};

function isValid(s) {
    let count = 0;
    for (let c of s) {
        if (c === '(') count++;
        if (c === ')') count--;
        if (count < 0) return false;
    }
    return count === 0;
}

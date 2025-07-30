/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = n => {
    let p = Array(n).fill(1); p[0] = p[1] = 0;
    for (let i = 2; i * i < n; i++) if (p[i]) for (let j = i * i; j < n; j += i) p[j] = 0;
    return p.reduce((a, b) => a + b, 0);
};

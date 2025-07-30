/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

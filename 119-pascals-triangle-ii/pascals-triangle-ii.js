/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = [1];

    for (let k = 1; k <= rowIndex; k++) {
        let prev = row[k - 1];
        row[k] = (prev * (rowIndex - k + 1)) / k;
    }

    return row;
};

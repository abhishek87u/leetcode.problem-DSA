/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (r, c, ch) => {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === ch || board[i][c] === ch ||
                board[3 * Math.floor(r / 3) + Math.floor(i / 3)][3 * Math.floor(c / 3) + i % 3] === ch)
                return false;
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let ch = '1'; ch <= '9'; ch = String.fromCharCode(ch.charCodeAt() + 1)) {
                        if (isValid(r, c, ch)) {
                            board[r][c] = ch;
                            if (solve()) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
};

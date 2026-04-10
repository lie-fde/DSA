/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


var exist = function (board, word) {
    let row = board.length
    let col = board[0].length
    const dfs = (i, j, k) => {
        if (i >= row || j >= col || i < 0 || j < 0 || board[i][j] !== word[k]) {
            return false
        }
        if (k + 1 == word.length) {
            return true
        }
        let temp = board[i][j]
        board[i][j] = "#"
        let found = (dfs(i, j + 1, k + 1) ||
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j - 1, k + 1))

        board[i][j] = temp
        return found

    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] == word[0]) {
                if (dfs(i, j, 0)) {
                    return true
                }
            }
        }
    }
    return false
};
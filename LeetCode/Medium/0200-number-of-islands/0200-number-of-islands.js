/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    let m = grid.length
    let n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "1") {
                dfs = (i, j) => {
                    if (i >= m || i < 0 || j >= n || j < 0 || grid[i][j] == "0") {
                        return
                    }
                    grid[i][j] = "0"

                    dfs(i, j + 1)
                    dfs(i, j - 1)
                    dfs(i + 1, j)
                    dfs(i - 1, j)

                }
                dfs(i, j)
                count++
            }
        }
    }
    return count
};
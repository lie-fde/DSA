/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let val = image[sr][sc]
    if(val===color) return image
    const dfs=(i,j,val)=>{
        if(i<0 || j<0 || i>=image.length || j>=image[0].length || image[i][j]!=val){
            return
        }
        image[i][j]=color
        dfs(i,j+1,val)
        dfs(i+1,j,val)
        dfs(i-1,j,val)
        dfs(i,j-1,val)
    }
    dfs(sr,sc,val)
    return image
};
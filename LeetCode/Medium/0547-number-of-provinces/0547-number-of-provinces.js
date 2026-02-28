/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set()
    let province = 0
    for(let i=0;i<isConnected.length;i++){
        if(!visited.has(i)){
            province++
            dfs=(i)=>{
                visited.add(i)
                for(let j=0;j<isConnected[i].length;j++){
                    if(isConnected[i][j]==1 && !visited.has(j)){
                        dfs(j)
                    }
                }
                return
            }
            dfs(i)
        }
    }
    return province
};
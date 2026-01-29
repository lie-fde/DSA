/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count =0
    for(let i=0;i<jewels.length;i++){
        jewel=jewels[i]
        for(let j=0;j<stones.length;j++){
            if(jewel==stones[j]){
                count++
            }
        }
    }
    return count
    
};
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    let lcount =0
    for(let ch of s){
        ch == 'R'? lcount++ : lcount--
        if(lcount==0) count++
    }
    return count
};
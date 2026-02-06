/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a=0
    for(let val of s){
        if(val==='A'){
            a++
        }
        if(a>1) return false
    }
    if(s.includes('LLL')) return false
    return true
};
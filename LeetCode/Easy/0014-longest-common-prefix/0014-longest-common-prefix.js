/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return false
    let s1=strs[0]
    for(let i=0;i<s1.length;i++){
        let prefix=s1.slice(0,i+1)
        for(let j=1;j<strs.length;j++){
             let temp = strs[j].slice(0,i+1)
             if(prefix!=temp){
                return s1.slice(0,i)
             }
        }
    }
    return s1
};
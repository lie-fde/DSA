/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let r=num.length-1
    while(r>=0){
        if(num[r]%2!=0){
            return num.slice(0,r+1)
        }
        r--
    }
    return ""
};
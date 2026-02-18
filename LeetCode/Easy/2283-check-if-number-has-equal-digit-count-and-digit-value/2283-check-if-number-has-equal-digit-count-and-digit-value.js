/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let freq = {}
    for(let val of num){
        freq[val] = (freq[val]|| 0) + 1
    }

    for(let i=0;i<num.length;i++){
        if((freq[i]|| 0) != num[i]){
            return false
        }
    }
    return true
};
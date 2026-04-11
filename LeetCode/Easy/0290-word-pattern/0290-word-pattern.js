/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    let hash = {}
    let arr1 = []
    if(arr.length!=pattern.length) return false
    for(let i=0;i<pattern.length;i++){
        if(hash[pattern[i]]){
            if(arr[i]!==hash[pattern[i]]){
                return false
            }
        }
        else{
            if(arr1.includes(arr[i])){
                return false
            }
            hash[pattern[i]]=arr[i]
            arr1.push(arr[i])
        }
    }
     console.log(hash)
    return true
   
};
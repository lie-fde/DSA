/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev=0
    let temp
    let temp1=x
    let n = String(x).length
    for(let i=0;i<n;i++){
        temp=x%10
        rev=rev*10 + temp
        x=Math.floor(x/10)
    }
    if (temp1==rev){
        return true 
    }
    else{
        return false
    }
    
};
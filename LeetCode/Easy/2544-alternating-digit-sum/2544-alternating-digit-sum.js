/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum=0
    n=String(n)
    for(let i=0;i<n.length;i++){
        if(i%2==0){
            sum+=Number(n[i])
        }
        else{
            sum-=Number(n[i])
        }
    }
    return sum
};
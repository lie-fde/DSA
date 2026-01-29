/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy=x
    let rev=0
    x=Math.abs(x)
    while(x>0){
        temp=x%10
        rev=rev*10 + temp
        x=Math.floor(x/10)
    }
    if (rev> 2**31-1) return 0

    return xCopy>0 ? rev : -rev

    
};
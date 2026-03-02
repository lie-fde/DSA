/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary=[]
    while(n>0){
        let remainder = n % 2
        binary.push(remainder)
        n=Math.floor(n/2)
    }
    binary = binary.filter(num => num==1)
    return binary.length
};
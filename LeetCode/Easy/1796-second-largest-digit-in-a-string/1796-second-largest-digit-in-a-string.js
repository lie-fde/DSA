/**
 * @param {string} s
 * @return {number}
 */
function isDigit(n){
   return /^[0-9]$/.test(n)
}
var secondHighest = function(s) {
    let SecondLargest =-1
    let highest=-1
    let arr = s.split('')
    for(let i=0;i<arr.length;i++){
        if(isDigit(arr[i])){
            if(arr[i]>highest){
                SecondLargest=highest
                highest=arr[i]
            }
            else if(arr[i]>SecondLargest && arr[i]!=highest){
                SecondLargest=arr[i]
            }
        }
    }
    return Number(SecondLargest) 
    
};
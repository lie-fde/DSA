/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res=[]
    let arr=s.split('')
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="i"){
            res.reverse()
        }
        else{
            res.push(arr[i])
        }
    }
    return res.join('')
};
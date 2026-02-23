/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let n = nums.length
    let freq = new Array(n+1).fill(0)
    let duplicate =-1
    let missing =-1
    for(let num of nums){
        freq[num]++
    }

    for(let i=1;i<=nums.length;i++){
        if(freq[i]==2) duplicate = i
        if(freq[i]==0) missing =i
    }

    return[duplicate,missing]
};
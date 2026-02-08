/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum=0
    let prefixSum=[]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        prefixSum.push(sum)
    }
    let totalSum=prefixSum[prefixSum.length-1]
    let lsum=0
    let rsum=0
    for(let i=0;i<nums.length;i++){
        rsum=totalSum-nums[i]-lsum
        if(lsum==rsum) return i
        lsum=prefixSum[i]
    }

    return -1

};
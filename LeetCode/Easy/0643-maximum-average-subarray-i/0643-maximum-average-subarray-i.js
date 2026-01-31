/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum=0

    for(let i=0;i<k;i++){
        windowSum+=nums[i]
    }
    let maxAverage=windowSum
    for(let i=k;i<nums.length;i++){
        windowSum+=nums[i]
        windowSum-=nums[i-k]
        maxAverage=Math.max(maxAverage,windowSum)
    }
    return maxAverage/k
};
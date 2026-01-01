/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   let arr = [...nums]
   k = k % nums.length;
   let index
   for(let i=0;i<nums.length;i++){
    index=(i+k)%nums.length
    nums[index]=arr[i]
   }
  
    
};
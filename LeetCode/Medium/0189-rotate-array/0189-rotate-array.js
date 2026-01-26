/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   
   function rot(l,r){
    while(l<r){
        temp=nums[l]
        nums[l]=nums[r]
        nums[r]=temp
        l++
        r--
    }
   }
   k=k%nums.length
   rot(0,nums.length-1)
   rot(0,k-1)
   rot(k,nums.length-1)
  
    
};
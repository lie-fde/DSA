/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n=nums.length
    let k=0
   for(let i=n;i<n*2;i++){
    nums.push(nums[k]);
    k++
   }
   return nums
    
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l=0
    let r=0
    while(r<nums.length){
        if(nums[r]!==val){
            nums[l]=nums[r]
            l++
        }
        r++
    }
    return l
};
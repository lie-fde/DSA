/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
    let count
    let result = []
    for (let i = 0; i < nums.length; i++) {
        count = 0
        if ((i - k) < 0 || nums[i] > nums[i - k]) {
            count++
        }
        if ((i + k) >= nums.length || nums[i] > nums[i + k]) {
            count++
        }
        if (count == 2) {
            result.push(nums[i])
        }
    }
    let sum = result.reduce((a,b)=> a+b , 0)
    return sum
};
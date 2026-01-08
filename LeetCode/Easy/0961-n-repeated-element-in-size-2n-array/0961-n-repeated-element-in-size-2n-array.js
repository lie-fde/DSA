/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let res = (nums.length) / 2
    let seen = {}
    for (let num of nums) {
        if (num in seen) {
            seen[num] += 1
        }
        else {
            seen[num] = 1
        }
    }
    for(let key in seen){
        if(seen[key]==res){
            return Number(key)
        }
    }


};
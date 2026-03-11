/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
     nums = nums.sort((a,b)=>a-b)
     let closest=nums[0]+nums[1]+nums[2]
     let sum
     for(let i=0;i<nums.length-2;i++){
        l=i+1;
        r=nums.length-1
        while(l<r){
            sum=nums[i]+nums[l]+nums[r]
            if(Math.abs(sum-target)<Math.abs(target-closest)){
                closest=sum
            }
            if(sum<target){
                l++
            }
            else if(sum>target){
                r--
            }
            else{
                return sum
            }
        }
     }
     return closest
}
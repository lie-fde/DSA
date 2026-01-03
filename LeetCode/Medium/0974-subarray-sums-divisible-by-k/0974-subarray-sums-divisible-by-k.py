class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count=0
        freq={0:1}
        prefixSum=0
        for num in nums:
            prefixSum+=num
            ele=prefixSum%k
            if ele in freq:
                count+=freq[ele]
            freq[ele]=freq.get(ele,0)+1
        return count
        
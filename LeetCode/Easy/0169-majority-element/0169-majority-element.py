class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count=0
        candidate=None
        for ele in nums:
            if count==0:
                candidate=ele
            
            count+= 1 if (candidate==ele) else -1

        return candidate
        
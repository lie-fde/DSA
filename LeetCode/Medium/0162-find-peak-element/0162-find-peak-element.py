class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        largest=max(nums)
        return nums.index(largest)
        
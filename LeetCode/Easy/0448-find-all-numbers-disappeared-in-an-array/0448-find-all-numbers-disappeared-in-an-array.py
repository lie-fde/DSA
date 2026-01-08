class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        nums.sort()
        res=[]
        i=1
        newSet=set(nums)
        while i<=len(nums):
            if i not in newSet:
                res.append(i)
            i+=1
        return res

        
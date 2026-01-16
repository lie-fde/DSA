class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        arr=set(nums)
        if len(arr) < 3:
            return max(arr)
        highest=float("-inf")
        secondHighest=float("-inf")
        thirdHighest=float("-inf")
        for num in arr:
            if num>highest:
                thirdHighest=secondHighest
                secondHighest=highest
                highest=num
            elif num>secondHighest:
                thirdHighest=secondHighest
                secondHighest=num
            elif num> thirdHighest:
                thirdHighest=num
        return thirdHighest



        
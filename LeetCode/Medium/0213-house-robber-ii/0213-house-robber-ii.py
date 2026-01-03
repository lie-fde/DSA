class Solution:
    def rob(self, nums: List[int]) -> int:
        def robfn(arr):
            n=len(arr)
            if n==1:
                return arr[0]
            print(arr)
            dp=[0]*(n+1)
            dp[0]=0
            dp[1]=arr[0]
            for i in range(2,n+1):
                steal= arr[i-1]+dp[i-2]
                skip = dp[i-1]
                dp[i]=max(steal,skip)
            return dp[n]
        skipFirst=nums[1:]
        skipLast=nums[:-1]
        res1=robfn(skipFirst)
        res2=robfn(skipLast)
        return max(res1,res2)
        
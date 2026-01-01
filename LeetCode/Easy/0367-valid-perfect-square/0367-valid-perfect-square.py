class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left=1
        right=num-1
        n=num
        if num==1:
            return True
        while(left<right):
            mid=(left+right)//2
            if pow(mid,2)==num:
                return True
            if pow(mid+1,2)>num and pow(mid-1,2)<num:
                return False
            if pow(mid,2)>num:
                right=mid
            else:
                left=mid+1
        
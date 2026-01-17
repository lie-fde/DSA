class Solution:
    def isPalindrome(self, x: int) -> bool:
        x=str(x)
        n=len(x)
        x=int(x)
        real=x
        temp=0
        for i in range(n):
            a=x%10
            temp= temp*10 + a
            x=x//10
        if temp==real:
            return True
        else:
            return False
        
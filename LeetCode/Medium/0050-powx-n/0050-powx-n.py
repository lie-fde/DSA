class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n==0:
            return 1
        pows=abs(n)
        if pows%2==0:
            res=self.myPow(x*x,pows//2)
        else:
            res=self.myPow(x*x,pows//2)*x
        return res if n>0 else (1/res) 
        

        
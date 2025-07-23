# 1614. Maximum Nesting Depth of the Parentheses

# Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

class Solution:
    def maxDepth(self, s: str) -> int:
        cu=0
        result=0
        for item in s:
            if item == "(":
                cu+=1
            elif item == ")":
                cu-=1
            result=max(result,cu)
        return result
        

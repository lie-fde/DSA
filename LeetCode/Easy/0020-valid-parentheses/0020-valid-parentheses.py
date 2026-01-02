class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        mappings={')':'(','}':'{',']':'['}
        for ele in s:
            if ele in mappings:
                top = stack.pop() if stack else "#"
                if top!=mappings[ele]:
                    return False
            else:
                stack.append(ele)
        return not stack
       
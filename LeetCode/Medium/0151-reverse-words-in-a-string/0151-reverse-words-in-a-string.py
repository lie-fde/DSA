class Solution:
    def reverseWords(self, s: str) -> str:
        l=0
        result=[]
        while l<len(s):
            while l<len(s) and s[l]==" ":
                l+=1
            if l<len(s):
                word_start=l
                while l<len(s) and s[l]!=" ":
                    l+=1
                result.append(s[word_start:l])
        return " ".join(result[::-1])
            

        
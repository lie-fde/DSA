class Solution:
    def firstUniqChar(self, s: str) -> int:
        freq=Counter(s)
        res=-1
        for key in freq:
            if freq[key]==1:
                res=s.index(key)
                return res
        return res
        
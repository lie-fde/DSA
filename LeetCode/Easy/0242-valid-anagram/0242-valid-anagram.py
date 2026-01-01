class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq=Counter(s)
        if freq==Counter(t):
            return True
        return False
        
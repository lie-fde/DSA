class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ga=defaultdict(list)

        for ele in strs:
            key=tuple(sorted(ele))
            ga[key].append(ele)
        result=list(ga.values())
        result.sort(key=len)
        return result

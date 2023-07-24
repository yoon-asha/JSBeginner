from collections import Counter

def solution(k, tangerine):
    
    counter = Counter(tangerine)
    counts = [count for count in Counter(tangerine).values()]
    counts.sort(reverse=True)
    
    i = 0
    while(k > 0 and i <len(counts)):
        k = k - counts[i]
        i += 1
    
    
    return i
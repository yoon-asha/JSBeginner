def solution(s):
    n = len(s)
    lefts = ("(","{","[")
    rights = (")","}","]")
    reverse = {
        "]":"[",
        "}":"{",
        ")":"("
    }

    s = s + s[:-1]
    start,curr = 0,0
    stack = []
    count = 0
    while start < n and curr<len(s):
        if s[curr] in lefts:
            stack.append(s[curr])
            curr += 1
        elif stack and reverse[s[curr]] == stack[-1]:
            stack.pop()
            curr += 1
            if not stack:
                count += 1        
                if curr-start == n : return count
        else:
            stack = []
            start = curr+1
            curr = start
            count = 0
            
    return 0        
                
            
            
    
    

def solution(n):
    
    count = {}
    count[1] = 1
    count[2] = 2
    for k in range(3,n+1):
        count[k] = (count[k-1] + count[k-2]) % 1234567
    
    return count[n]
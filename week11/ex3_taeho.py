from collections import defaultdict

def solution(n):
    
    if n==1: return 0
    if n==2: return 3
    
    dp = {}
    patterns = {(1,0,0),(0,1,0),(0,0,1),(1,1,0),(1,0,1),(0,1,1),(1,1,1)}
    for pattern in patterns:
        dp[pattern] = defaultdict(int)
    
    
    dp[(1,0,0)][2] = 1
    dp[(0,0,1)][2] = 1
    dp[(1,1,1)][2] = 3   

    for k in range(3,n+1):
        dp[(1,0,0)][k] = dp[(0,1,1)][k-1]
        dp[(0,1,0)][k] = dp[(1,0,1)][k-1]
        dp[(0,0,1)][k] = dp[(1,1,0)][k-1]
        dp[(1,1,0)][k] = dp[(1,1,1)][k-1] + dp[(0,0,1)][k-1]
        dp[(1,0,1)][k] = dp[(0,1,0)][k-1]
        dp[(0,1,1)][k] = dp[(1,1,1)][k-1] + dp[(1,0,0)][k-1]
        dp[(1,1,1)][k] = dp[(1,1,1)][k-2] + dp[(1,1,0)][k-1]+ dp[(0,1,1,)][k-1]
        
        for pattern in patterns:
            dp[pattern][n] = dp[pattern][n] % 1_000_000_007
    
    
    return dp[(1,1,1)][n] 
def solution(x, y, n):

    dp = {}
    dp[x] = 0
    
    for num in range(y+1):
        ls = []
        if num - n in dp:
            ls.append(dp[num-n]+1)
        if num%2 == 0 and num/2 in dp:
            ls.append(dp[num/2] + 1)
        if num%3 == 0 and num/3 in dp:
            ls.append(dp[num/3] + 1)
        if ls:
            dp[num] = min(ls)
            
    return dp[y] if y in dp else -1
    
def solution(board):
    
    m = len(board)
    n = len(board[0])
    
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m):
        for j in range(n):
            if board[i][j]:
                dp[i+1][j+1] = min([dp[i][j],dp[i+1][j],dp[i][j+1]]) + 1
            
    return max(max(arr) for arr in dp)**2
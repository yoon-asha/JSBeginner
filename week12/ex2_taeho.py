def solution(A,B):
    
    A = sorted(A)  # 오름차순 (ASC)
    B = sorted(B, reverse=True)  # 내림차순 (DESC)
    

    answer = sum((a*b for a,b in zip(A,B)))
    return answer
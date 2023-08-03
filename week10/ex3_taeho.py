def solution(n):
    
    dict_ = {1:"1", 2:"2", 3:"4"}
    answer = ""    
    while n>0:
        r = (n-1) % 3 + 1 #n -> r in (1,2,3)
        answer = dict_[r] + answer
        n = (n-r)/3
    
    return answer  
    
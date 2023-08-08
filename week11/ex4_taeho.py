from collections import defaultdict

def solution(clothes):
    
    cloth_count = defaultdict(int)
    for _, cloth_type in clothes:
        cloth_count[cloth_type] += 1
    
    choices = 1
    for value in cloth_count.values():
        choices *= (value+1)
        
    return choices - 1
def solution(sizes):
    
    width = [max(size) for size in sizes]
    height = [min(size) for size in sizes]    
    return max(height)*max(width)
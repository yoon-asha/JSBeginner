def solution(n, left, right):
    return [max((x//n)+1,(x%n)+1) for x in range(left,right+1)]


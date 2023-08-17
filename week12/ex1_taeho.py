def count_dist(char):
    chars = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    idx = chars.index(char)
    return min(idx, 26-idx)

    
def solution(name):
    
    count_v = sum([count_dist(char) for char in name])
    count_h = len(name)-1
    
    left,right = 1,1
    while left<len(name):
        while(left<len(name) and name[left]!="A"):
            left += 1
        right = left
        while(right<len(name) and name[right]=="A"):
            right+=1
        if left < len(name) and right<=len(name):
            move_left = left-1
            move_right = len(name)-right
            count_h = min(count_h,2*move_left+move_right,move_left+2*move_right)
        left = right
    
    return count_v + count_h
def solution(answers):
    
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    
    count1, count2, count3 = 0,0,0
    idx1, idx2, idx3 = 0,0,0
    
    for answer in answers:
        if pattern1[idx1] == answer:
            count1 += 1
        if pattern2[idx2] == answer:
            count2 += 1
        if pattern3[idx3] == answer:
            count3 += 1
            
        idx1 = (idx1+1) % len(pattern1)
        idx2 = (idx2+1) % len(pattern2)
        idx3 = (idx3+1) % len(pattern3)
        
    max_count = max(count1,count2,count3)
    answer = []
    
    if count1 == max_count:
        answer.append(1)
    if count2 == max_count:
        answer.append(2)
    if count3 == max_count:
        answer.append(3)
    
    return answer    
    
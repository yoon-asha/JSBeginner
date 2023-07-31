def solution(people, limit):

    people.sort()
    left = 0 
    right = len(people) -1
    
    answer = 0
    while(people[right] +people[left] > limit and right > 0):
        right -= 1
        answer += 1

    while (left < right):
        if (people[right] + people[left]) <= limit:
            answer += 1 
            left += 1
            right -= 1
        else:
            answer += 1
            right -= 1
            
    if left == right:
        answer += 1
    
    return answer
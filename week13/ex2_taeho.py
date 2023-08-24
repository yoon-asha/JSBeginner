from collections import defaultdict
from collections import deque

def solution(wants, numbers, discount):

    count = 0
    q = deque()
    discount_dict = defaultdict(int)
    
    for item in discount:
        if len(q) == 10:
            discount_dict[q.popleft()] -= 1
        q.append(item)
        discount_dict[item] += 1
        if all([discount_dict[want] >= number 
                for want,number in zip(wants,numbers)]):
            count += 1
    return count
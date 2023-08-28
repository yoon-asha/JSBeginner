def solution(numbers):
    
    answer = [-1] * len(numbers)
    stack = []
    for i,number in enumerate(numbers):
        while(stack and stack[-1][1] < number):
            j, _ = stack.pop()
            answer[j] = number
        stack.append((i,number))

    return answer
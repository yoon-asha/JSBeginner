def find_next_positions(board,n):
    answer = []
    x = len(board)
    for y in range(n):
        for x_,y_ in enumerate(board):
            if y == y_ or abs(x-x_) == abs(y-y_):
                break
        else:
             answer.append(y)   
    return answer


def solution(n):

    count = 0
    empty_board = []
    stack = [empty_board]
    while stack:
        board = stack.pop()
        if len(board)==n:
            count += 1
        else:
            stack.extend([board + [x] for x in find_next_positions(board,n)])
            
    return count
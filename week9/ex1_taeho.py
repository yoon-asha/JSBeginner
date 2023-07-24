def move(curr,direction):
    if direction =="down":
        return [curr[0] + 1,curr[1]]
    elif direction == "right":
        return [curr[0] ,curr[1] + 1]
    elif direction == "up":
        return [curr[0] - 1, curr[1] - 1]
    else:
        raise ValueError
    
def movable(curr,direction,arr):
    try:
        next_ = move(curr,direction)
        return False if arr[next_[0]][next_[1]] else True
    except IndexError:
        return False
        



def solution(n):
    
    arr = []
    for i in range(n):
        arr.append([None]* (i+1))
    
    curr = [0,0]
    value = 1
    
    directions = ["down","right","up"]
    dinx = 0
    direction = directions[dinx]
    
    while(value <= n*(n+1)/2):
        arr[curr[0]][curr[1]] = value
        if movable(curr,direction,arr):
            curr = move(curr,direction)
        else:
            dinx = (dinx + 1) % 3
            direction = directions[dinx]
            curr = move(curr,direction)
        value += 1

    return sum(arr,[])
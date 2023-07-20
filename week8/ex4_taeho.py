def solution(maps):

    height = len(maps)
    width = len(maps[0])
    
    def check(x,y):
        return x < height and x >= 0 and y < width and y >= 0 and maps[x][y] == 1
    
    graph = {}
    for x in range(height):
        for y in range(width):
            if check(x,y):
                points = {(x-1,y),(x+1,y),(x,y-1),(x,y+1)}
                graph[(x,y)] = set([point for point in points if check(*point)])
    
    dist = 1
    arrived = {}
    arrived[dist] = {(0,0)}
    total_arrived = {(0,0)}
    
    while( dist < width*height and len(arrived[dist]) > 0):
        dist += 1
        arrived[dist] = set()
        for point in arrived[dist - 1]:
            for adj_point in graph[point]:
                if adj_point == (height-1,width-1):
                    return dist
                elif adj_point not in total_arrived:
                    arrived[dist].add(adj_point)
                    total_arrived.add(adj_point)
                    
    return -1
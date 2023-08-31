def calc_costs(minerals):
    costs = [0,0,0]
    cost_map = {
        "diamond":[1,5,25],
        "iron":[1,1,5],
        "stone":[1,1,1]
    }
    for mineral in minerals:
        for i in range(len(costs)):
            costs[i] += cost_map[mineral][i]
    return costs
        
        
def solution(picks, minerals):
    
    
    costs_per_five = []
    i = 0
    while i < len(minerals) and i < sum(picks)*5:
        costs_per_five.append(calc_costs(minerals[i:i+5]))
        i += 5    
    costs_per_five.sort(key=lambda x: (x[2],x[1]), reverse=True)   
    
    
    total_cost = 0
    for costs in costs_per_five:
        if picks[0] > 0:
            total_cost += costs[0]
            picks[0] -= 1
        elif picks[1] > 0:
            total_cost += costs[1]
            picks[1] -= 1
        elif picks[2] > 0:
            total_cost += costs[2]
            picks[2] -= 1
        else:
            continue
        
    return total_cost
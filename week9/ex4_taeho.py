def check_order(skill_tree,skill):
    skill_set = set(skill)
    inx = 0
    for item in skill_tree:
        if item in skill_set:
            if inx < len(skill) and skill[inx] == item:
                inx += 1
            else:
                return False
    return True

def solution(skill, skill_trees):
    
    checks = [check_order(skill_tree,skill) for skill_tree in skill_trees]
    return sum(checks)   
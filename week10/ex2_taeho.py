def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities)*5
    cache = []
    answer = 0
    for citi in cities:
        citi = citi.upper()
        if citi in cache:
            answer += 1
            cache.remove(citi)
            cache = [citi] + cache
        else:
            answer += 5
            cache = [citi] + cache[:cacheSize-1]
    return answer
    
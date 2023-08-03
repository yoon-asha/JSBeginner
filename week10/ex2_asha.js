function solution(cacheSize, cities) {
  var answer = 0
  const cache = []

  if (cacheSize === 0) return cities.length * 5

  for (let x of cities) {
    x = x.toLowerCase()
    if (cache.includes(x)) {
      answer++
      cache.splice(cache.indexOf(x), 1)
    } else {
      if (cache.length >= cacheSize) cache.shift()
      answer += 5
    }

    cache.push(x)
  }
  return answer
}

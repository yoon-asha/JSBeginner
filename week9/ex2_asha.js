function solution(k, tangerine) {
  var answer = 0
  const newMap = new Map()

  for (let x of tangerine) {
    newMap.set(x, newMap.get(x) + 1 || 1)
  }

  const newArr = [...newMap].sort((a, b) => b[1] - a[1])

  while (k > 0) {
    k -= newArr.shift()[1]
    answer++
  }

  return answer
}

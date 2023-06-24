function solution(k, score) {
  var answer = []
  const fame = []

  for (let x of score) {
    fame.push(x)
    fame.sort((a, b) => b - a).splice(k)
    answer.push(Math.min(...fame))
  }

  return answer
}

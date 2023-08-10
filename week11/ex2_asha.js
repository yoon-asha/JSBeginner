function solution(n, left, right) {
  var answer = []
  for (let i = left; i <= right; i++) {
    // 행 parseInt(i / n) // 열 i % n
    answer.push(Math.max(parseInt(i / n), i % n) + 1)
  }
  return answer
}

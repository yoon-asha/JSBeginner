function solution(k, m, score) {
  let answer = 0
  score.sort((a, b) => b - a)
  let cnt = 0
  while (cnt < score.length) {
    const newScore = score.slice(cnt, cnt + m)
    cnt += m
    if (newScore.length === m) answer += Math.min(...newScore) * m
  }
  return answer
}

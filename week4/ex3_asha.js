function solution(t, p) {
  let answer = 0,
    num = 0

  for (let i = 0; i < t.length - p.length + 1; i++) {
    num = t.slice(i, p.length + i)
    if (num <= p) answer++
  }
  return answer
}

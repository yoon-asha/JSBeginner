function solution(n, m, section) {
  let answer = 0,
    sum = 0 // 칠한 구역이 될 sum
  for (let x of section) {
    // 이때까지 칠한 sum보다 x가 클 때
    if (sum < x) {
      answer++
      // 지금 구역 칠하고 sum 업데이트
      sum = x + m - 1
    }
  }
  return answer
}

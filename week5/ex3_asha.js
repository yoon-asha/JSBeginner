function solution(sequence, k) {
  var answer = []
  let [lt, sum] = [0, 0]
  for (let rt = 0; rt < sequence.length; rt++) {
    sum += sequence[rt]

    if (sum === k) {
      answer.push(lt, rt)
    }
    while (sum >= k) {
      sum -= sequence[lt++]
      if (sum === k) {
        answer.push(lt, rt)
      }
      while (answer.length > 2) {
        answer[1] - answer[0] > answer[3] - answer[2] ? answer.splice(0, 2) : answer.splice(2, 2)
      }
    }
  }

  return answer
}

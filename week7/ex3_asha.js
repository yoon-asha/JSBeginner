function solution(progresses, speeds) {
  var answer = []

  while (speeds.length) {
    let cnt = 0
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i]
      }
    }

    while (progresses[0] >= 100) {
      progresses.shift()
      speeds.shift()
      cnt++
    }

    if (cnt > 0) answer.push(cnt)
  }
  return answer
}

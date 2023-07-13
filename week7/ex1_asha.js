function solution(s) {
  var answer = s.toLowerCase().split('')
  answer[0] = s[0].toUpperCase()
  for (let i = 1; i < answer.length - 1; i++) {
    if (answer[i] === ' ' && answer[i + 1] !== ' ') answer[i + 1] = answer[i + 1].toUpperCase()
  }
  return answer.join('')
}

function solution(n) {
  var answer = ''
  while (n > 0) {
    if (n % 3 !== 0) {
      answer += n % 3
      n = parseInt(n / 3)
    } else {
      answer += 4
      n = parseInt(n / 3) - 1
    }
  }
  return answer.split('').reverse().join('')
}

console.log(solution(24))

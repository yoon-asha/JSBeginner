function solution(s) {
  var answer = [0, 0]

  while (s.length > 1) {
    answer[0]++
    answer[1] += s.length - s.replaceAll(/0/gi, '').length
    s = s.replaceAll(/0/gi, '')
    s = s.length.toString(2)
  }

  return answer
}

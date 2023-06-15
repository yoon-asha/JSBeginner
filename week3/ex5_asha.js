function isCorrect(s) {
  // 올바른 괄호인지 확인
  let stack = []
  for (let x of s) {
    if (x === '(') stack.push(x)
    else {
      if (stack.length === 0) return false
      stack.pop()
    }
  }
  if (stack.length > 0) return false
  return true
}

function solution(w) {
  let answer = ''
  let lt = 0,
    rt = 0

  if (w === '') return ''
  if (isCorrect(w)) return w

  for (let i = 0; i < w.length; i++) {
    if (w[i] === '(') lt++
    else rt++

    if (lt === rt) {
      if (isCorrect(w.slice(0, i + 1))) {
        return (answer = w.slice(0, i + 1) + solution(w.slice(i + 1)))
      } else {
        answer = '(' + solution(w.slice(i + 1)) + ')'

        for (let j = 1; j < i; j++) {
          if (w[j] === '(') answer += ')'
          else answer += '('
        }
      }
      return answer
    }
  }
}

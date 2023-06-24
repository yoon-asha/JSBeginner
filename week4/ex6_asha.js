function solution(X, Y) {
  var answer = ''

  X = X.split('')
  Y = Y.split('')

  while (X.length > 0) {
    let num = Y.indexOf(X.at(-1))
    if (num > -1) {
      answer += X.pop()
      Y.splice(num, 1)
    } else X.pop()
  }
  if (answer === '') return '-1'
  if (+answer === 0) return '0'
  return answer
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('')
}

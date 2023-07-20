function solution(answers) {
  const a = [1, 2, 3, 4, 5]
  const b = [2, 1, 2, 3, 2, 4, 2, 5]
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let answer = [0, 0, 0]

  for (let i = 0; i < answers.length; i++) {
    //console.log(answers[i],' a= ',a[i],' b= ',b[i],' c= ',c[i])
    if (answers[i] === a[i % 5]) answer[0]++
    if (answers[i] === b[i % 8]) answer[1]++
    if (answers[i] === c[i % 10]) answer[2]++
  }

  let result = []

  let max = Math.max(...answer)
  for (let j = 0; j < answer.length; j++) {
    if (answer[j] === max) result.push(j + 1)
  }

  return result
}

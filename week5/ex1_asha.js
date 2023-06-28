function solution(survey, choices) {
  var answer = ''

  // prettier-ignore
  let result = new Map([['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]])

  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split('')

    if (choices[i] < 4) {
      result.set(type1, result.get(type1) + (4 - choices[i]))
    } else if (choices[i] > 4) {
      result.set(type2, result.get(type2) + (choices[i] - 4))
    }
  }

  result = result.entries()

  for (let x of result) {
    const next = result.next().value
    if (x[1] > next[1]) answer += x[0]
    else if (x[1] < next[1]) answer += next[0]
    else answer += x[0]
  }

  return answer
}

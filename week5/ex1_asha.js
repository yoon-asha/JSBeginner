function solution(survey, choices) {
  var answer = ''

  // prettier-ignore
  let personality = new Map([['R', 1], ['T', 1], ['C', 2], ['F', 2], ['J', 3], ['M', 3], ['A', 4], ['N', 4]])

  let result = new Map()

  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split('')

    switch (choices[i]) {
      case 1:
        result.set(type1, (result.get(type1) || 0) + 3)
        result.set(type2, (result.get(type2) || 0) + 0)
        break
      case 2:
        result.set(type1, (result.get(type1) || 0) + 2)
        result.set(type2, (result.get(type2) || 0) + 0)
        break
      case 3:
        result.set(type1, (result.get(type1) || 0) + 1)
        result.set(type2, (result.get(type2) || 0) + 0)
        break
      case 5:
        result.set(type2, (result.get(type2) || 0) + 1)
        result.set(type1, (result.get(type1) || 0) + 0)
        break
      case 6:
        result.set(type2, (result.get(type2) || 0) + 2)
        result.set(type1, (result.get(type1) || 0) + 0)
        break
      case 7:
        result.set(type2, (result.get(type2) || 0) + 3)
        result.set(type1, (result.get(type1) || 0) + 0)
        break
      default:
        result.set(type2, (result.get(type2) || 0) + 0)
        result.set(type1, (result.get(type1) || 0) + 0)
        break
    }
  }

  result = new Map(
    [...result].sort((a, b) => personality.get(a[0]) - personality.get(b[0]))
  ).entries()

  for (let x of result) {
    const next = result.next().value
    if (x[1] > next[1]) answer += x[0]
    else if (x[1] < next[1]) answer += next[0]
    else
      x[0].charCodeAt(0) < next[0].charCodeAt(0)
        ? (answer += x[0])
        : (answer += next[0])
  }

  return answer
}

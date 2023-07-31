function solution(people, limit) {
  var answer = 0
  people.sort((a, b) => b - a)
  for (let x of people) {
    if (x + people.at(-1) <= limit) {
      answer++
      people.pop()
    } else {
      answer++
    }
  }
  return answer
}

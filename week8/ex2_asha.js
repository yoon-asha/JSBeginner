function solution(cards) {
  var answer = []

  for (let i = 0; i < cards.length; i++) {
    let cnt = 0
    while (true) {
      if (cards[i] > 0) {
        const tmp = cards[i]
        cards[i] = 0
        i = tmp - 1
        cnt++
      } else {
        answer.push(cnt)
        break
      }
    }
  }
  answer = answer.filter((el) => el != 0).sort((a, b) => b - a)

  return answer.length > 1 ? answer[0] * answer[1] : 0
}

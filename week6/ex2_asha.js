function solution(order) {
  var answer = 0
  let stack = []
  let start = 1

  for (let i = 0; i < order.length; i++) {
    if (stack.at(-1) === order[i]) {
      stack.pop()
      answer++
      continue
    }
    while (start !== order[i]) {
      stack.push(start++)
      if (start > order.length) return answer
    }

    if (start === order[i]) {
      answer++
      start++
    }
  }
  return answer
}

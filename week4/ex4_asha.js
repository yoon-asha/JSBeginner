function solution(plans) {
  var answer = []
  let stack = []

  plans = plans
    .map((el) => [el[0], time(el[1]), +el[2]])
    .sort((a, b) => a[1] - b[1])

  for (let i = 0; i < plans.length - 1; i++) {
    let [name, start, playtime] = plans[i]
    start += playtime

    if (start > plans[i + 1][1]) {
      stack.push([name, start - plans[i + 1][1]])
    }
    if (start <= plans[i + 1][1]) {
      answer.push(name)
      let free = plans[i + 1][1] - start
      if (free > 0 && stack.length > 0) freetime(stack, free, answer)
      if (stack.length === 0) free = 0
    }
  }
  answer.push(plans.at(-1)[0])
  while (stack.length > 0) {
    let stackName = stack.pop()
    answer.push(stackName[0])
  }
  return answer
}

function freetime(stack, free, answer) {
  while (stack.length > 0 && free > 0) {
    if (free >= stack.at(-1)[1]) {
      free -= stack.at(-1)[1]
      let stackName = stack.pop()
      answer.push(stackName[0])
    } else {
      stack.at(-1)[1] -= free
      free = 0
    }
  }
}

function time(start) {
  const [h, m] = start.split(':')
  return +h * 60 + +m
}

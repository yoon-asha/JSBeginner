function solution(s) {
  let answer = []
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      answer[i] = -1
      stack[i] = s[i]
    } else {
      // console.log(stack, stack.lastIndexOf(s[i]), s[i])
      answer[i] = stack.length - stack.lastIndexOf(s[i])
      stack[i] = s[i]
    }
  }
  return answer
}

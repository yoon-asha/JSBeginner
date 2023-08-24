function solution(s) {
  var answer = 0
  s = s.split('')
  // s를 split으로 다 나눠준 다음 for문
  for (let i = 0; i < s.length; i++) {
    // check에서 true가 나오면 answer에 ++
    if (check(s)) answer++
    s.push(s.shift()) // s 처음 괄호를 뒤에 붙여준다(문제에서 말하는 왼쪽으로 한 칸씩 회전)
  }
  return answer
}

function check(s) {
  // 미리 correct에 괄호 짝들을 넣어준다.
  const correct = { ']': '[', '}': '{', ')': '(' }
  const stack = []

  for (let x of s) {
    // 현재 문자가 여는 괄호일 경우 stack에 push
    if (x === '(' || x === '[' || x === '{') stack.push(x)
    else {
      // 닫는 괄호일 때 stack의 마지막과 일치하는 닫는 괄호면 (괄호 짝이 맞으면) 해당 괄호 스택에서 제거 stack pop()
      if (correct[x] === stack.at(-1)) stack.pop()
      else return false
    }
  }
  // 모두 맞는 괄호일 때 stack에 남아있는게 있으면 안되니까 return false
  if (stack.length > 0) return false
  return true
}

/**
check 더 깔끔하게
function check(s) {
  const correct = { '[': ']', '{': '}', '(': ')' }
  const stack = []

  for (let x of s) {
  // 닫는 괄호일 때 스택 마지막 괄호와 일치하면 pop!
    if (correct[stack.at(-1)] === x) stack.pop()
    else stack.push(x) // 여는 괄호면 stack.push()
  }
  // 남은게 없어야 하므로 if문 없이 stack.length===0이 맞으면 true 아니면 false 리턴하면 된다.
  return stack.length === 0
}
 */

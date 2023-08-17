function solution(name) {
  var answer = 0
  let move = name.length - 1

  for (let i = 0; i < name.length; i++) {
    let char = name[i].charCodeAt()
    char < 78 ? (answer += char % 65) : (answer += 91 - char)

    let idx = i + 1
    while (idx < name.length && name[idx] === 'A') idx++
    move = Math.min(move, i * 2 + name.length - idx, i + 2 * (name.length - idx))
  }
  return answer + move
}

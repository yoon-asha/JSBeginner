function charCode(str) {
  let map = new Map()
  for (let x of str) map.set(x.charCodeAt(), x)
  return map
}

function solution(s, skip, index) {
  let answer = ''
  let map = charCode(skip)
  let cnt = index

  for (let i = 0; i < s.length; i++) {
    let sCode = s[i].charCodeAt()

    for (let j = 0; j < cnt; j++) {
      if (sCode === 122) sCode -= 26
      sCode++
      if (map.has(sCode)) cnt++
    }
    cnt = index
    answer += String.fromCharCode(sCode)
  }
  return answer
}

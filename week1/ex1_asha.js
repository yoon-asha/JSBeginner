function solution(keymap, targets) {
  let answer = new Array(targets.length).fill(0)
  let map = new Map()
  keymap.forEach((e) => {
    e.split('').forEach((v, i) => {
      if (map.get(v) === undefined) map.set(v, i + 1)
      if (map.get(v) > i + 1) map.set(v, i + 1)
    })
  })

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      if (map.get(targets[i][j]) === undefined) {
        answer[i] = -1
        break
      }
      if (map.get(targets[i][j]) !== undefined)
        answer[i] += map.get(targets[i][j])
    }
  }

  return answer
}

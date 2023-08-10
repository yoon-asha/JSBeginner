function solution(clothes) {
  var answer = 1
  const hash = {}

  for (let i = 0; i < clothes.length; i++) {
    const [name, type] = clothes[i]
    if (!hash[type]) {
      hash[type] = [name]
    } else hash[type].push(name)
  }

  for (const [key, val] of Object.entries(hash)) {
    answer *= val.length + 1
  }

  return answer - 1
}

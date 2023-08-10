/*
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
*/

// 역시 Map이 더 빠르다,,,
function solution(clothes) {
  var answer = 1
  const hash = new Map()

  for (let i = 0; i < clothes.length; i++) {
    hash.set(clothes[i][1], hash.get(clothes[i][1]) + 1 || 1)
  }

  hash.forEach((el) => {
    answer *= el + 1
  })
  return answer - 1
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
)
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
)

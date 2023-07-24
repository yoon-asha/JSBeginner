function solution(num) {
  let cnt = 0

  if (num === 1) return 0

  while (num > 1 && cnt < 500) {
    cnt++
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1)
  }
  return cnt < 500 ? cnt : -1
}

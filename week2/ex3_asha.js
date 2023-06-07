function solution(brown, yellow) {
  for (let y = 3; y < brown + yellow; y++) {
    let x = (brown + yellow) / y
    if ((x - 2) * (y - 2) === yellow) return [x, y]
  }
}

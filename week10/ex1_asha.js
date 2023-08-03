function solution(sizes) {
  let [w, h] = [0, 0]

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]

    if (w < sizes[i][0]) w = sizes[i][0]
    if (h < sizes[i][1]) h = sizes[i][1]
  }
  return w * h
}

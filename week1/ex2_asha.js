function solution(wallpaper) {
  var answer = []

  let lux = Number.MAX_SAFE_INTEGER,
    luy = Number.MAX_SAFE_INTEGER,
    rdx = 0,
    rdy = 0

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (lux > i) lux = i
        if (luy > j) luy = j

        if (rdx < i) rdx = i
        if (rdy < j) rdy = j
      }
    }
  }
  return [lux, luy, rdx + 1, rdy + 1]
}

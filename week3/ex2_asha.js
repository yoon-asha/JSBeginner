function solution(cards1, cards2, goal) {
  let c1 = 0,
    c2 = 0

  for (let x of goal) {
    if (x === cards1[c1]) {
      c1++
    } else if (x === cards2[c2]) {
      c2++
    } else return 'No'
  }
  return 'Yes'
}

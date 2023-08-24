function solution(want, number, discount) {
  var answer = 0

  discount.forEach((_, i) => {
    // discount에서 10개씩 자른다
    const arr = discount.slice(i, i + 10)

    const cnt = new Map()
    // 10개씩 잘린 arr를 cnt로 set 해줌
    arr.forEach((v) => cnt.set(v, (cnt.get(v) || 0) + 1))
    // check true면 answer++
    if (check(cnt)) answer++
  })

  function check(cnt) {
    for (let i = 0; i < want.length; i++) {
      // 지금 10일 동안 살 수 있는 물건들을 카운트 해둔 cnt 맵에서
      // want에 있는 물건의 카운트가 number와 다르면 false!
      if (cnt.get(want[i]) !== number[i]) return false
    }
    // 다 같다면 지금 10일에 회원가입 하면 되니까 return true
    return true
  }

  return answer
}

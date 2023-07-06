function solution(today, terms, privacies) {
  var answer = []

  const termsMap = new Map()

  for (let x of terms) {
    const [type, m] = x.split(' ')
    termsMap.set(type, m)
  }

  for (let i = 0; i < privacies.length; i++) {
    let [date, type] = privacies[i].split(' ')

    if (calculate(date, +termsMap.get(type)) < today.split('.').join('')) {
      answer.push(i + 1)
    }
  }

  return answer
}

function calculate(date, num) {
  let [y, m, d] = date.split('.').map(Number)

  m += num
  d--

  if (m > 12) {
    y += parseInt(m / 12)
    m = m % 12
  }
  if (m === 0) {
    y--
    m = 12
  }
  if (d === 0) {
    m--
    d = 28
  }

  return '' + y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d)
}

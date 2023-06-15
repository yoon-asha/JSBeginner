function solution(id_list, report, k) {
  const answer = new Array(id_list.length)
  answer.fill(0) // answer = [0,0,0,0...,0] 회원 숫자만큼의 길이를 가진 배열 만든다.
  const report_list = {}
  id_list.map((user) => {
    return (report_list[user] = [])
  })

  report.map((user) => {
    const [user_id, report_id] = user.split(' ')
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id)
    }
  })

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1
      })
    }
  }

  return answer
}

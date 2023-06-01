/**
대충 만든 자판
https://school.programmers.co.kr/learn/courses/30/lessons/160586
*/

function solution(keymap, targets) {
    var answer = []
  
    for (let i in targets) {
        let target = targets[i]
        var count = 0
      
        for (let char of target) {
            var min = 100
          
            for (let key of keymap) {
                let index = key.indexOf(char)

                if (index > -1) {
                    min = Math.min(min, index)
                }
            }
            if (min < 100) {
                count += min + 1
            } else {
                count = -1
                break
            }
        }
        answer.push(count)
    }
    return answer
}

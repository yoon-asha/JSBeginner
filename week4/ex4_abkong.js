/**
과제 진행하기
https://school.programmers.co.kr/learn/courses/30/lessons/176962
*/

function solution(plans) {
    let currentHomework = { subject: "", time: -1, during: 0 };
    let stack = [];
    let answer = [];

    for (let [subject, time, during] of plans.map(([subject, time, during]) => [subject, getMinute(time), parseInt(during)]).sort((a, b) => a[1] - b[1])) {
        if (currentHomework.time >= 0) {
            if (currentHomework.time + currentHomework.during <= time) {
                currentHomework.time += currentHomework.during;
                answer.push(currentHomework.subject);
                while (stack.length > 0 && currentHomework.time < time) {
                    let last = stack.pop();
                    
                    if (currentHomework.time + last.during > time) {
                        stack.push({ subject: last.subject, during: currentHomework.time + last.during - time });
                        if (currentHomework.time !== time) {
                            currentHomework.time = time;
                        }
                    } else {
                        currentHomework.time += last.during;
                        answer.push(last.subject);
                    }
                }
            } else {
                stack.push({ subject: currentHomework.subject, during: currentHomework.time + currentHomework.during - time });
            }
        }
        if (currentHomework.subject !== subject) {
            currentHomework = { subject, time, during };
        }
    }
    answer.push(currentHomework.subject);
    while (stack.length > 0) {
        let last = stack.pop();
        
        answer.push(last.subject);
    }
    return answer;
}

function getMinute(strDate) {
    const separatedTime = strDate.split(":");
    const hour = parseInt(separatedTime[0] || "0") || 0;
    const minute = parseInt(separatedTime[1] || "0") || 0;
    return hour * 60 + minute;
}

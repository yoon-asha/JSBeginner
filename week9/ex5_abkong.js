/**
구명보트
https://school.programmers.co.kr/learn/courses/30/lessons/42885
*/

function solution(people, limit) {
    var answer = 0;
    var start = 0, end = people.length - 1;
    
    people.sort((a, b) => a - b);
    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++;
        }
        end--;
        answer++;
    }
    return answer;
}

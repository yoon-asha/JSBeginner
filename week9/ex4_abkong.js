/**
스킬트리
https://school.programmers.co.kr/learn/courses/30/lessons/49993
*/

function solution(skill, skill_trees) {
    var answer = 0;

    loop: for (let i = 0; i < skill_trees.length; i++) {
        var skills = skill_trees[i].split("");
        var cnt = 0;
        
        for (let j = 0; j < skills.length; j++) {
            if (cnt == skill.indexOf(skills[j])) cnt++;
            if (cnt < skill.indexOf(skills[j])) continue loop;
        }
        answer++;
    }
    return answer;
}

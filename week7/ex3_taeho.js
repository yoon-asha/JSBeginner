function solution(progresses, speeds) {
    var answer = [];
    while(progresses[0] < 100){
        for (let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i];
        }
    }
    let i = 0;
    while(progresses[i] >=100){
        i++;
    }
    if (i < progresses.length){
        return [i].concat(solution(progresses.slice(i), speeds.slice(i)));
    } else {
        return [i]
    }
    
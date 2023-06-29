function solution(sequence, k) {
    var array = Array(sequence.length + 1).fill(0);
    var map = {};
    var answer = [];

    for (let i in array) {
        array[i] = (i > 0 ? array[i - 1] + sequence[i - 1] : 0);
        map[array[i]] = i;
    }
    for (let end in array) {
        let start = map[array[end] - k]
        
        if (start > -1) {
            answer.push([end - 1, end - 1 - start]);
        }
    }
    answer.sort((a, b) => a[1] - b[1])
    return [answer[0][0] - answer[0][1], answer[0][0]]
}

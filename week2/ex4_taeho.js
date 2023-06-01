function solution(n, m, section) {
    let count = 0;
    while (section.length > 0) {
        let right = section[0] + m;
        while (section.length > 0 && section[0] < right) {
          section.shift();
        }
        count++;
    }
    return count;
}

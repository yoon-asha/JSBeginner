function solution(s) {
    return Array.from(s).map((_, i) => {
        let substring = s.substring(0, i);
        let lastIndex = substring.lastIndexOf(s[i]);
        return lastIndex > -1 ? i - lastIndex : -1;
    });
}

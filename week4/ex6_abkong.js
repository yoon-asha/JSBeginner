/**
숫자 짝꿍
https://school.programmers.co.kr/learn/courses/30/lessons/131128
*/

function solution(x, y) {
    let xMap = Array.from(x).reduce((map, char) => {
        const value = char.toString();
        map[value] = map[value] || [];
        
        map[value].push(value);
        return map;
    }, {});
    let yMap = Array.from(y).reduce((map, char) => {
        const value = char.toString();
        map[value] = map[value] || [];
        
        map[value].push(value);
        return map;
    }, {});
    let result = Array.from(x)
        .filter(char => y.includes(char))
        .filter((char, index, self) => self.indexOf(char) === index)
        .map(char => xMap[char].length < yMap[char].length ? xMap[char] : yMap[char])
        .flat()
        .sort((a, b) => b.localeCompare(a))
        .join('');
    return result.length === 0 ? "-1" : result.charAt(0) === '0' ? "0" : result;
}

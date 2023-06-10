function solution(ingredient) {
    return ingredient.reduce((acc, i) => {
        acc.push(i);
        if (acc.length > 3 && acc[acc.length - 1] === 1 && acc[acc.length - 2] === 3 && acc[acc.length - 3] === 2 && acc[acc.length - 4] === 1) {
            for (let i = 0; i < 4; i++) {
                acc.pop();
            }
            acc.unshift(-1);
        }
        return acc;
    }, [])
        .filter(x => x === -1)
        .length;
}

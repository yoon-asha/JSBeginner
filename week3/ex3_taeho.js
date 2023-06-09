function solution(k, m, score) {
    
    score.sort();

    let sales = 0;
    let count = 0;
    while (score.length > 0){
        price = score.pop();
        count++;
        if (count === m){
            sales += price * m;
            count = 0;
        }
    }
    return sales
}
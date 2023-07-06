function combination_three(n){
    const arr =[];
    for (i=0; i<n; ++i){
        for(j=i+1; j<n; ++j){
            for(k=j+1; k<n; ++k){
                arr.push([i,j,k])
            }
        }
    }
    return arr
}


function solution(number) {
    let combination_arr = combination_three(number.length);
    return combination_arr.map(x=> number[x[0]] + number[x[1]] + number[x[2]] === 0 ? 1: 0).reduce((a,b)=>a+b);
}
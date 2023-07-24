function solution(num) {
    
    let count = 0;
    while (num > 1 && count < 500){
        num % 2 ? num = 3*num +1 : num /= 2 
        count++;
    }

    return num===1 ? count : -1;
}s
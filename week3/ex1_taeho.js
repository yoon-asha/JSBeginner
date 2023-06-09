function solution(ingredient) {
    
    let count = 0;
    let stack = [];
    for (let x of ingredient){
        stack.push(x);
        if (stack.length >= 4 && 
            stack[stack.length-4]==1 && 
            stack[stack.length-3]==2 && 
            stack[stack.length-2]==3 && 
            stack[stack.length-1]==1 ){
            count++; 
            stack.splice(-4);
        }
    }
    return count;
    
}
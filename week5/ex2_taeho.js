function solution(k, score) {
    
    const arr = [];
    const answer = []; 
    
    for (number of score){
        if(arr.length<k){
            arr.push(number);
         } else if (arr[arr.length-1] < number){
            arr[arr.length-1] = number;
         }
        arr.sort((a,b)=>b-a);
        answer.push(arr[arr.length-1])
    }
    return answer;
}
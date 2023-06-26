function solution(sequence, k) {
    
    const partialSumArray = [0]; 

    let partialSum = 0;
    for (let num of sequence) {
        partialSum += num;
        partialSumArray.push(partialSum);
    }

    let answer = [0 , sequence.length+1]
    let left = 0 ,right = 1;
    while (right < partialSumArray.length) {
        let sumOfInterval = partialSumArray[right] - partialSumArray[left];  
        if (sumOfInterval === k) {
            if (right - left - 1 < answer[1] - answer[0]){
                answer = [left,right-1];
            }
        left++;
        } else if(sumOfInterval > k){ 
        left++;
        } else {
        right++;
        }
    }
    return answer;
}




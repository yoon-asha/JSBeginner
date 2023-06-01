function solution(keymap, targets) {
  let obj = {};

  for(let i=0; i<keymap.length; i++){
    for(let j=0; j<keymap[i].length; j++){
      const currentKey = keymap[i][j];
      const currentValue = j+1;
      if(!obj[currentKey]){
        obj[currentKey] = currentValue
      }else{
        obj[currentKey] = Math.min(obj[currentKey], j+1);
      }
    }
  }

  let answer = [];

  for(let i=0; i<targets.length; i++){
    let sum = 0
    for(let j=0; j<targets[i].length; j++){
      if(!obj[targets[i][j]]){
        answer.push(-1)
        sum = 0
        break 
      }else{
        sum += obj[targets[i][j]]
      }
    }
    if(sum !== 0) answer.push(sum)
  }

  return answer
}   
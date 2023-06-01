function solution(keymap, targets) {
    const keyLists = keymap.map(key => Array.from(key));
    const dict = {};
  
    for (const keyList of keyLists) {
      for (const char of keyList) {
        if (char in dict) {
          dict[char] = Math.min(dict[char], keyList.indexOf(char));
        } else {
          dict[char] = keyList.indexOf(char);
        }
      }
    }
  
    const answer = [];
    for (const target of targets) {
      let trial = 0;
      for (const char of target) {
        if (char in dict) {
          trial += dict[char] + 1;
        } else {
          trial = -1;
          break;
        }
      }
      answer.push(trial);
    }
  
    return answer;
  }
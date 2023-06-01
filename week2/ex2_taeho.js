function solution(s, skip, index) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');
    for (let char of skip) {
      let index_ = alphabets.indexOf(char);
      alphabets.splice(index_, 1);
    }
    
    let new_s = "";
    for (let char of s) {
      let old_index = alphabets.indexOf(char);
      let new_index = (old_index + index) % alphabets.length;
      new_s += alphabets[new_index];
    }
    
    return new_s;
  }
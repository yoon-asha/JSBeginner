function solution(brown, yellow) {
    
    const max_len = Math.floor(brown / 2);
    let i = 3;
    while (i <= max_len) {
      let j = 3;
      while (j <= i) {
        if (2 * i + 2 * j - 4 === brown && i * j === brown + yellow) {
          return [i, j];
        }
        j++;
      }
      i++;
    }
  }
//Primary
function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
      const substr = t.substring(i, p.length + i);
      if (parseInt(substr) <= parseInt(p)) {
        count++;
      }
    }
    return count;
}

//Secondary
function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
      const substr = t.slice(i, p.length + i);
      if (+substr <= +p) count++; 
    }
    return count;
}
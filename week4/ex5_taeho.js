function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i === i) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }
  
  function evaluate(num,limit,power){
      const damage = countDivisors(num);
      return damage > limit ? power : damage;
  }
  

  function solution(number, limit, power) {
      return Array
        .from(Array(number).keys())
        .map(x=>evaluate(x+1,limit,power))
        .reduce((x, y) => x + y)
  }
function solution(expression) {
    console.log(eval(expression));
    const symbols = [];
    for (const char of expression){
      if (char == "+" || char == "-" || char == "*") {
        symbols.push(char);
      }
    }
    const numbers = expression.replace(/[+\-*]/g, " ").split(" ").map(str=>parseInt(str));    
  
    symbol_orders = [
        ["+", "-", "*"],
        ["+", "*", "-"],
        ["*", "-", "+"],
        ["*", "+", "-"],
        ["-", "+", "*"],
        ["-", "*", "+"],
    ];
      
      
      
  }
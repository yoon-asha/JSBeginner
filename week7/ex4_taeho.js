function solution(n, start = 1, mid = 2, end = 3) {
    if (n === 1) {
      return [[start, end]];
    } else {
      const front = solution(n - 1, start, end, mid);
      const middle = [[start, end]];
      const back = solution(n - 1, mid, start, end);
      return front.concat(middle, back);
    }
  }
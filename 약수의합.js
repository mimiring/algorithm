function solution(n) {
  let answer = 0;

  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
      let quotient = n / i;
      if (i !== quotient) {
        answer += quotient;
      }
      answer += i;
    }
  }

  return answer;
}

console.log(solution(9));

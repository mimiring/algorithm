function solution(n) {
  let num = n;
  let answer = [];

  while (num > 0) {
    answer.push(num % 10);
    num = Math.floor(num / 10);
  }

  return answer;
}

console.log(solution(12345));

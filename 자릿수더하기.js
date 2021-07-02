function solution(n) {
  let num = n;
  let answer = 0;

  while (num > 0) {
    answer += num % 10;
    num = Math.floor(num / 10);
  }

  return answer;
}

console.log(solution(123));

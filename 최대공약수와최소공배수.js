function solution(n, m) {
  let answer = [];
  let gcm = 1;
  let lcd = 1;

  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcm = i;
    }
  }

  lcd = (n * m) / gcm;
  answer.push(gcm, lcd);

  return answer;
}

console.log(solution(3, 12));

function solution(n) {
  let answer = 0;
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i * i <= n; i++) {
    if (arr[i] === 0) continue;

    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }

  return answer;
}

console.log(solution(10));
console.log(solution(5));

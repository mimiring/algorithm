function solution(n) {
  let answer = "";
  let watermelon = "수박";

  if (n.length < 2) {
    return watermelon.slice(0, n);
  }

  let times = Math.floor(n / 2);
  for (let i = 0; i < times; i++) {
    answer += watermelon;
  }
  if (n % 2 > 0) {
    answer += watermelon.slice(0, 1);
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));

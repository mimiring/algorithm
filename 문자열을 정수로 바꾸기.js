function solution(s) {
  let answer = 0;
  let digit = 1;
  let sign = 1;
  let final = 0;

  if (s[0] === "-") {
    sign = -1;
    final = 1;
  } else if (s[0] === "+") {
    sign = 1;
    final = 1;
  }

  for (let i = s.length - 1; i >= final; i--) {
    answer += Number(s[i]) * digit;
    digit *= 10;
  }

  answer *= sign;

  return answer;
}
console.log(solution("1234"));

// function solution(s) {
//   var answer = Number(s);
//   return answer;
//   }

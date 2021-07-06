function solution(s) {
  let answer = false;

  if (s.length === 4) {
    for (let i = 0; i < s.length; i++) {
      let num = Number(s[i]);
      if (num / 1 !== num) {
        return answer;
      }
    }
    answer = true;
  }

  return answer;
}

console.log(solution("a234"));
console.log(solution("1e34"));

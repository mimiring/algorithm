function solution(s) {
  let splitString = s.split("");

  splitString.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  const answer = splitString.join("");
  return answer;
}

console.log(solution("Zbcdefg"));

function solution(s, n) {
  let answer = "";

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let upperIdx = upper.indexOf(s[i]);
    let lowerIdx = lower.indexOf(s[i]);

    if (upperIdx >= 0) {
      upperIdx += n;
      if (upperIdx >= upper.length) {
        upperIdx %= upper.length;
      }
      answer += upper[upperIdx];
    }

    if (lowerIdx >= 0) {
      lowerIdx += n;
      if (lowerIdx >= lower.length) {
        lowerIdx %= lower.length;
      }
      answer += lower[lowerIdx];
    }
  }

  return answer;
}

console.log(solution("a B z", 4));

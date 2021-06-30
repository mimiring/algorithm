function solution(phoneNumber) {
  let answer = "";

  for (let i = 0; i < phoneNumber.length - 4; i++) {
    answer += "*";
  }

  for (let j = phoneNumber.length - 4; j < phoneNumber.length; j++) {
    answer += phoneNumber[j];
  }
  return answer;
}

console.log(solution("01033334444"));

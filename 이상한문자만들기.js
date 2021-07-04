function solution(string) {
  let sliceString = string.split(" ");
  let answer = [];

  for (let i = 0; i < sliceString.length; i++) {
    for (let j = 0; j < sliceString[i].length; j++) {
      if (j % 2 === 0) {
        answer.push(sliceString[i][j].toUpperCase());
      } else {
        answer.push(sliceString[i][j].toLowerCase());
      }
    }

    if (i < sliceString.length - 1) {
      answer.push(" ");
    }
  }

  return answer.join("");
}

console.log(solution("try hello world"));

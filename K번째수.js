function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp.sort((a, b) => {
      return a - b;
    });
    // console.log("temp: ", temp);
    answer.push(temp[commands[i][2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

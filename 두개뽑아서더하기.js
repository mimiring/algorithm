function solution(numbers) {
  let answer = [];
  let temp = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      temp.add(sum);
    }
  }

  answer = [...temp];
  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));

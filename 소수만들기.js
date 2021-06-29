function solution(nums) {
  let answer = 0;
  let temp = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        temp.push(sum);
      }
    }
  }
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    let isPrime = true;
    for (let j = 2; j < temp[i]; j++) {
      if (temp[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      answer++;
    }
  }

  console.log(answer);
}

solution([1, 2, 3, 4]);

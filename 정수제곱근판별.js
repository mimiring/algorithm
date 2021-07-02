function solution(n) {
  let odd = false;

  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      odd = i;
      break;
    }
  }

  if (odd) {
    return Math.pow(odd + 1, 2);
  } else {
    return -1;
  }
}

console.log(solution(121));
console.log(solution(3));

// function solution(n) {
//   var answer = 0;
//   let sqrt = Math.sqrt(n);
//   if(sqrt === parseInt(sqrt)) {
//       answer = (sqrt+1) *(sqrt+1);
//   } else {
//       answer = -1;
//   }
//   return answer;
// }

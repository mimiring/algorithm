function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = arr[0];
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }

  return arr.slice(0, idx).concat(arr.slice(idx + 1, arr.length));
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

// function solution(arr) {
//   var answer = [];
//   let low = 0;
//   if(arr.length <= 1) {
//       answer.push(-1);
//   } else {
//       for(let i=1; i<arr.length; i++) {
//       if(arr[i] < arr[low]) {
//           low = i;
//           }
//       }

//       for(let j=0; j<arr.length; j++) {
//           if(j === low) continue;
//           answer.push(arr[j]);
//       }
//   }

//    return answer;
// }

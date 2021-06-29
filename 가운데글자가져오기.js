function solution(word) {
  let answer = "";
  let mid = Math.floor(word.length / 2);

  if (word.length % 2 === 0) {
    answer = word[mid - 1] + word[mid];
  } else {
    answer = word[mid];
  }

  return answer;
}

console.log(solution("abde"));

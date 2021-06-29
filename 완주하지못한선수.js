function solution(participant, completion) {
  let answer = "";
  let people = {};

  for (let i = 0; i < participant.length; i++) {
    if (people[participant[i]]) {
      people[participant[i]]++;
    } else {
      people[participant[i]] = 1;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    people[completion[i]]--;
  }

  for (let key in people) {
    if (people[key] > 0) {
      answer = key;
    }
  }

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["kiki"]));

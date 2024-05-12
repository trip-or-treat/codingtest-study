function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let item of d) {
    if (sum + item > budget) break;
    sum += item;
    answer += 1;
  }
  return answer;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;

console.log(solution(d, budget));

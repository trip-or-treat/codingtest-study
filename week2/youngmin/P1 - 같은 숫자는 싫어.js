function solution(arr) {
  let answer = [];

  while (arr.length !== 0) {
    const pop = arr.pop();

    if (answer[answer.length - 1] === pop) continue;
    answer.push(pop);
  }

  return answer.reverse();
}

let arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));

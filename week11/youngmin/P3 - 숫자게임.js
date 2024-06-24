// 탐욕법

function solution(A, B) {
  let answer = 0;
  let idx = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  for (let curA of A) {
    if (curA < B[idx]) {
      answer += 1;
      idx += 1;
    }
  }

  return answer;
}

let A = [5, 1, 6, 7];
let B = [2, 2, 6, 8];

console.log(solution(A, B));

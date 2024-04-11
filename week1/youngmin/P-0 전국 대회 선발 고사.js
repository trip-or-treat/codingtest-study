function solution(rank, attendance) {
  const answer = [];
  let i = 1;

  while (answer.length < 3) {
    const isAttend = attendance[rank.indexOf(i)];

    isAttend && answer.push(rank.indexOf(i));
    i += 1;
  }

  return 10000 * answer[0] + 100 * answer[1] + answer[2];
}

let rank = [3, 7, 2, 5, 4, 6, 1];
let attendance = [false, true, true, true, true, false, false];
console.log(solution(rank, attendance));

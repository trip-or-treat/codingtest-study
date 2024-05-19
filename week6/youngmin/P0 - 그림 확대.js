function solution(picture, k) {
  const answer = [];

  picture.map((p) => {
    // row
    const tmp = [...p].map((str) => str.repeat(k)).join("");
    // col
    for (let i = 0; i < k; i += 1) {
      answer.push(tmp);
    }
  });

  return answer;
}

let picture = [
  ".xx...xx.",
  "x..x.x..x",
  "x...x...x",
  ".x.....x.",
  "..x...x..",
  "...x.x...",
  "....x....",
];
let k = 2;

console.log(solution(picture, k));

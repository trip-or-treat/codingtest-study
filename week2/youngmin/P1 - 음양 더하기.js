function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => (signs[idx] ? (acc += cur) : (acc += -cur)),
    0
  );
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

console.log(solution(absolutes, signs));

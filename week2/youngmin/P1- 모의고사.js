function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let [ac, bc, cc] = [0, 0, 0];

  answers.map((el, idx) => {
    if (el === a[idx % a.length]) ac += 1;
    if (el === b[idx % b.length]) bc += 1;
    if (el === c[idx % c.length]) cc += 1;
  });

  const max = Math.max(ac, bc, cc);

  return [ac, bc, cc]
    .map((el, idx) => el === max && idx + 1)
    .filter((el) => Number(el));
}

let answers = [1, 2, 3, 4, 5];

console.log(solution(answers));

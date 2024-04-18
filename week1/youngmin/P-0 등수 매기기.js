function solution(score) {
  const totalScroe = score.map((el) => (el[0] + el[1]) / 2);

  const rank = totalScroe.slice().sort((a, b) => b - a);

  return totalScroe.map((el) => rank.indexOf(el) + 1);
}

let score = [
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
];
console.log(solution(score));

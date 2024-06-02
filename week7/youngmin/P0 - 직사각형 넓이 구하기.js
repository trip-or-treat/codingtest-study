function solution(dots) {
  let [x, y] = [[], []];
  dots.forEach((el) => {
    const [nx, ny] = el;
    x.push(nx);
    y.push(ny);
  });

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
let dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];

console.log(solution(dots));

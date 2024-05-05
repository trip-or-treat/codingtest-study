function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((num) => n % num === 0)
    .reduce((a, c) => a + c, 0);
}
let n = 12;

console.log(solution(n));

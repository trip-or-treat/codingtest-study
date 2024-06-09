// 최댓값을 주어진 n만큼 하나씩 내리기
// 동일한 최댓값이 있을 시 n이 고갈될 때 까지 하나씩 다 내리기

function solution(n, works) {
  if (works.reduce((a, c) => a + c, 0) <= n) return 0;

  while (n) {
    let max = Math.max(...works);

    for (let i = 0; i < works.length; i += 1) {
      if (max === works[i] && n) {
        n -= 1;
        works[i] -= 1;
      } else continue;
    }
  }
  return works.reduce((a, c) => a + c * c, 0);
}

let n = 9;
let works = [1];

console.log(solution(n, works));

// 가장 큰 집합 곱 값 = 가장 큰 수들의 조합
// n으로 나누어 반올림해주고 정답에 적재
// 마지막에 남은값을 합쳐주고 정렬
function solution(n, s) {
  const answer = [];

  if (n > s) return [-1];

  while (n > 1) {
    const el = Math.round(s / n);
    answer.push(el);
    n -= 1;
    s -= el;
  }

  return answer.concat(s).sort();
}

// 첫시도 시간초과 중복조합

// function solution(n, s) {
//   const numlist = Array.from({ length: s }).map((_, i) => i + 1);

//   const result = [];
//   const combi = (arr, idx, k, list, result) => {
//     if (arr.length === k) {
//       if (arr.reduce((a, c) => a + c, 0) === s) result.push(arr);
//       return;
//     }
//     for (let i = idx; i < list.length; i += 1) {
//       combi([...arr, list[i]], i, k, list, result);
//     }
//   };
//   combi([], 0, n, numlist, result);

//   return result.length === 0 ? [-1] : result[result.length - 1];
// }

let n = 2;
let s = 1;

console.log(solution(n, s));

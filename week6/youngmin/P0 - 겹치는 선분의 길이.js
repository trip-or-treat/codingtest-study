// 겹치는 선을 제거하기 위해서 +1 부터 순회 후 mapping
// 2번이상 나오는 것들 갯수 return

function solution(lines) {
  let map = new Map();
  let answer = [];

  lines.forEach((line) => {
    for (let i = line[0] + 1; i <= line[line.length - 1]; i += 1) {
      map.set(i, map.has(i) + 1, 1);
    }
  });

  for ([k, v] of map) {
    if (v > 1) answer.push(k);
  }

  return answer.length;
}

let lines = [
  [-1, 1],
  [1, 3],
  [3, 9],
];
console.log(solution(lines));

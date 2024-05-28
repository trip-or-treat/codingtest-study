function solution(dots) {
  const stack = [dots.shift()];

  // 최대 조합 수 3 개 [[1, 2], [1, 4], [2, 3]]
  for (let i = 0; i < 3; i += 1) {
    const tmp = dots.shift();
    stack.push(tmp);

    const [result, tmpResult] = [
      inclination(dots[0], dots[1]),
      inclination(stack[0], stack[1]),
    ];

    if (result === tmpResult) return 1;

    dots.push(stack.pop());
  }

  return 0;
}
// 기울기
function inclination(arr1, arr2) {
  const [x, y] = [0, 1];

  return (arr2[y] - arr1[y]) / (arr2[x] - arr1[x]);
}

let dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

console.log(solution(dots));

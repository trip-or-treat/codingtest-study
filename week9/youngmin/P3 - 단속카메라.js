// 진입 지점 오름차순
// 앞차의 진출시점이 뒤의 진입시점보다 작다면 카메라 ++
// 현재 진출시점이 뒤의 진출시점보다 크다면 진출시점 업데이트 (포함이 되어야하니까 더 작은 수를 기준으로 묶어야함)

function solution(routes) {
  let answer = 1;
  let cur = 0;
  routes.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < routes.length; i += 1) {
    const [s, e] = [0, 1];

    if (routes[cur][e] < routes[i][s]) {
      answer += 1;
      cur = i;
    }

    if (routes[cur][e] > routes[i][e]) cur = i;
  }

  return answer;
}

let routes = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

console.log(solution(routes));

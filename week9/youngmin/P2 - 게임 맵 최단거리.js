function solution(maps) {
  const [xl, yl] = [maps.length - 1, maps[0].length - 1];
  // 하우상좌
  const [mx, my] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];

  // 처음 초기화 및 시작점 (x, y, cnt)
  maps[0][0] = 0;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    if (x === xl && y === yl) return cnt;

    for (let i = 0; i <= mx.length; i += 1) {
      const [nx, ny] = [x + mx[i], y + my[i]];
      // 유효한 값인지 경계설정
      if (nx >= 0 && nx <= xl && ny >= 0 && ny <= yl && maps[nx][ny] === 1) {
        // 왔던 곳 체크 및 그 부분부터 다시 시작
        maps[nx][ny] = 0;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }

  // 끝까지 가지 못했다면 -1
  return -1;
}

let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));

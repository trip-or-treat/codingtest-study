/*
    1. maps의 크기만큼의 2차원 배열로 된 visit 배열을 만들고 -1로 채워줍니다. (방문처리를 확인하기 위해)
    2. [0,0]부터 시작하여 큐를 통해 bfs로 찾아줍니다.
    3. 큐에 값이 없어질 때까지 순회해 줍니다.
        3-1. 큐에서 값을 첫번째 값을 하나 빼오고, 기억해줍니다(스냅샷?)
        3-2. 4번 반복문을 통해 상하좌우로 이동한 값을 확인합니다.
        3-3. 범위 내에 존재하면서 && maps의 값이 1이면서 && 방문한적 없다면 
        3-4. 큐에 추가해주고, 이전에 방문한 값 +1을 visit에 담아줍니다.
    4. 문제에선 [1,1]을 기준으로 했지만 실제론 [0,0]부터 시작했으므로 [n-1, m-1]의 위치를 찾아 출력합니다. 
*/

function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [[0, 0]];
  const [n, m] = [maps.length, maps[0].length];
  const visit = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
  visit[0][0] = 1;

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (maps[nx][ny] === 1 && visit[nx][ny] === -1) {
          q.push([nx, ny]);
          visit[nx][ny] = visit[x][y] + 1;
        }
      }
    }
  }
  return visit[n - 1][m - 1];
}

/*
    1. dfs를 통해 dungeons를 순차적으로 깊이우선 탐색하여 최대 count값을 출력 
    2. 방문한적 없으면서 최소 피로도를 통과할 경우 깊이우선 탐색 
    3. 방문할때 마다 max, cnt값을 비교하여 최대값을 찾아줌.
    4. 최대 방문 횟수인 max를 출력 
*/

function solution(k, dungeons) {
  let max = 0;
  let cnt = 0;
  const visit = Array.from({ length: dungeons.length }, () => false);

  dfs(cnt, k);

  return max;

  function dfs(cnt, curPirodo) {
    max = Math.max(max, cnt);

    dungeons.forEach(([minPirodo, needPirodo], idx) => {
      if (minPirodo <= curPirodo && !visit[idx]) {
        visit[idx] = true;
        dfs(cnt + 1, curPirodo - needPirodo);
        visit[idx] = false;
      }
    });
  }
}

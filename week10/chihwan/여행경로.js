/*
    1. ticket을 알파벳 순서가 앞서는 경로를 우선적으로 처리하기 위해 sort로 ticket을 정렬한다.
    2. DFS를 통해 탐색을 시작 
        2-1. 탈출조건 : cnt가 tickets의 길이면서 ans이 비어있는 경우(처음 도달한 경우) path를 ans에 담아서 종료
        2-2. 탐색 : tickets를 순회하면서 방문처리를 하며 ticket의 [from, to]에 따라 이동하며 DFS탐색
    3. 최종 path를 담은 ans을 출력
*/

function solution(tickets) {
  const cnt = 0;
  const ans = [];
  const cur = 'ICN';
  const path = ['ICN'];
  const visited = Array.from({ length: tickets.length }, () => false);

  tickets.sort();

  tripRoute(cur, path, cnt, tickets, visited, ans);

  return ans;
}

function tripRoute(cur, path, cnt, tickets, visited, ans) {
  if (cnt === tickets.length && ans.length === 0) {
    ans.push(...path);
    return;
  }

  tickets.forEach(([from, to], i) => {
    if (visited[i]) return;

    if (from === cur) {
      visited[i] = true;
      tripRoute(to, [...path, to], cnt + 1, tickets, visited, ans);
      visited[i] = false;
    }
  });
}

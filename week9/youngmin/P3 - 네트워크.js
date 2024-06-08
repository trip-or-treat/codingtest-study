function solution(n, computers) {
  let answer = 0;
  const visited = [];

  // 체크안되있으면 네트워크 하나깔고 인접한 노드 체크
  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      answer += 1;
      bfs(i);
    }
  }

  function bfs(idx) {
    const queue = [computers[idx]];

    while (queue.length) {
      const target = queue.shift();
      // 방문한 노드에서 연결되있는 노드 다 체크
      for (let i = 0; i < target.length; i += 1) {
        if (!visited[i] && target[i] === 1) {
          visited[i] = true;
          queue.push(computers[i]);
        }
      }
    }
  }

  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];

console.log(solution(n, computers));

function solution(n, wires) {
  let answer = n;
  const tree = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트
  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  for (const [v1, v2] of wires) {
    answer = Math.min(
      answer,
      Math.abs(bfs(v1, v2, tree, n) - bfs(v2, v1, tree, n))
    );
  }

  return answer;
}

function bfs(root, except, tree, n) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const queue = [root];
  visited[root] = true;
  let count = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    count++;

    for (const node of tree[cur]) {
      // 간선 끊기
      if (node !== except && !visited[node]) {
        queue.push(node);
        visited[node] = true;
      }
    }
  }

  return count;
}

let n = 9;
let wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(solution(n, wires));

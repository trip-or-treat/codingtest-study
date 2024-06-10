function solution(tickets) {
  const answer = [];
  const visited = [];
  //중복시 오름차순 정렬
  tickets.sort();

  const dfs = (start, cnt) => {
    answer.push(start);

    if (cnt === tickets.length) return true;

    for (let i = 0; i < tickets.length; i += 1) {
      const [s, e] = tickets[i];
      if (!visited[i] && start === s) {
        visited[i] = true;
        if (dfs(e, cnt + 1)) return true;
        // 필터에서 걸리지않고 실패할 시 실패한 부분부터 백트래킹
        visited[i] = false;
      }
    }
    // 실패한 부분 답변배열에서 제외
    answer.pop();
    return false;
  };

  dfs("ICN", 0);

  return answer;
}

let tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

console.log(solution(tickets));

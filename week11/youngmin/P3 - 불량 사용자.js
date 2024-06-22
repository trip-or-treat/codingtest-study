// 조합 DFS

function solution(user_id, banned_id) {
  let answer = new Set();

  const check = (id, banId) => {
    if (id.length !== banId.length) return false;

    for (let i = 0; i < id.length; i += 1) {
      if (banId[i] !== "*" && id[i] !== banId[i]) return false;
    }

    return true;
  };

  const visited = [];

  const dfs = (idx, arr) => {
    if (idx === banned_id.length) {
      // 중복되는 누적 배열 제거
      answer.add([...arr].sort().join(" "));
      return;
    }

    for (let i = 0; i < user_id.length; i += 1) {
      // banned 하나씩 처리
      if (check(user_id[i], banned_id[idx]) && !visited[i]) {
        visited[i] = true;
        arr.push(user_id[i]);
        dfs(idx + 1, arr);
        visited[i] = false;
        arr.pop();
      }
    }
  };

  dfs(0, []);

  return answer.size;
}

let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
let banned_id = ["*rodo", "*rodo", "******"];

console.log(solution(user_id, banned_id));

function solution(begin, target, words) {
  // 한글자만 다른 경우 check
  const strCheck = (curStr, targetStr) => {
    let count = 0;

    for (let i = 0; i < curStr.length; i += 1) {
      if (curStr[i] !== targetStr[i]) count += 1;
    }

    return count === 1 ? true : false;
  };

  // 기존값과 변환횟수
  const queue = [[begin, 0]];
  const visited = [];

  while (queue.length) {
    let [cur, cnt] = queue.shift();

    if (cur === target) return cnt;

    for (let i = 0; i < words.length; i += 1) {
      // 당장 변환 가능한 것들 같은 선상에 두고 체크
      if (strCheck(cur, words[i]) && !visited[i]) {
        visited[i] = true;
        queue.push([words[i], (cnt += 1)]);
      }
    }
  }

  return 0;
}

let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words));

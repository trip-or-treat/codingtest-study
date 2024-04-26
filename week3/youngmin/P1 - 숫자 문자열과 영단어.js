function solution(s) {
  let answer = "";
  let tmp = "";
  const list = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);

  for (let i = 0; i < s.length; i += 1) {
    if (Number(s[i]) >= 0) {
      answer += s[i];
      tmp = "";
      continue;
    }

    tmp += s[i];
    if (list.has(tmp)) {
      answer += list.get(tmp);
      tmp = "";
    }
  }

  return Number(answer);
}

let s = "one4seveneight";

console.log(solution(s));

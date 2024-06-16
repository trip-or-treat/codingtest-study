function solution(record) {
  let answer = [];
  const map = new Map();
  for (let i = 0; i < record.length; ++i) {
    const [state, uid, name] = record[i].split(" ");
    if (state === "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state === "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    map.set(uid, name);
  }
  return answer.map((el) => map.get(el[0]) + el[1]);
}
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));

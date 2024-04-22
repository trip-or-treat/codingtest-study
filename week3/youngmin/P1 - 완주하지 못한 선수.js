// 접근 방법
// hash로 각 참가자들과 완주자들 리스트에  참가자 key, 이름이 나온 횟수 value를 주어 카운팅
// 참가자들과 완주자들의 key가 같은데 value가 다르다면 완주하지 못한 참가자

function solution(participant, completion) {
  const participants = new Map();
  const completions = new Map();

  const hash = (list, map) => {
    list.map((person) => {
      map.has(person)
        ? map.set(person, map.get(person) + 1)
        : map.set(person, 1);
    });
  };

  hash(participant, participants);
  hash(completion, completions);

  for ([k, v] of participants) {
    if (v !== completions.get(k)) return k;
  }
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

// 1. 참가자명단을 map에 담아준다.
// 2. 완주자명단을 순회하면서 map에서 1씩 줄인다.
// 3. map에 남은 인원 중 0보다 큰 경우 출력한다.

function solution(participant, completion) {
  const map = new Map();
  participant.forEach((person) => map.set(person, (map.get(person) || 0) + 1));

  completion.forEach((person) => {
    if (map.get(person)) map.set(person, map.get(person) - 1);
  });

  return [...map].find(([name, num]) => num > 0)[0];
}

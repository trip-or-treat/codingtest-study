/*
  1. participant를 순회하면서 map에 [name, 동명이인 명수] 형태로 담아줍니다.
  2. complete를 순회하면서 map에서 완주한 선수를 -1해줍니다.
  3. map을 순회하면서 완주하지 못한 선수를 찾아 출력합니다.
*/

function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => {
    if (map.has(name)) map.set(name, map.get(name) + 1);
    else map.set(name, 0);
  });

  completion.forEach((name) => map.set(name, map.get(name) - 1));

  return [...map].find(([_, value]) => value === 0)[0];
}

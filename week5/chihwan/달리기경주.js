/*
    1. players를 순회하면서 {player, idx} 형태의 map 자료구조로 초기화합니다.
    2. callings를 순회하면서 아래의 4가지를 통해 players의 순서를 업데이트 해줍니다.
        2-1. {호출된 이름, 호출된 index값} => {호출된 이름 -1, 호출된 Index값 -1}
        2-2. {호출된 이름 -1, 호출된 Index값 -1} => {호출된 이름, 호출된 index값}
    3. players를 업데이트 한 뒤 map도 업데이트 해줍니다.

*/

function solution(players, callings) {
  const map = new Map();

  players.forEach((player, idx) => map.set(player, idx));

  callings.forEach((name) => {
    const calledIdx = map.get(name);
    const targetName = players[calledIdx - 1];

    players[calledIdx - 1] = name;
    players[calledIdx] = targetName;

    map.set(targetName, calledIdx);
    map.set(name, calledIdx - 1);
  });

  return [...map].sort((a, b) => a[1] - b[1]).map(([name]) => name);
}

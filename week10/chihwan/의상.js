/*
    1. map에 clothes의 [타입, 이름 list[] ] 형태로 보관합니다.
    2. map의 이름 list[]만 가져온 뒤, reduce를 통해 (이름 list[]의 길이 +1을) 다 곱해줍니다.
        2-1. 길이 +1을 해주는 이유는 입지않은 경우를 추가해줍니다.
    3. 아무것도 입지 않은 경우를 제외하기 위해 -1을 해주고, 출력합니다.
*/

function solution(clothes) {
  const map = new Map();

  clothes.forEach(([name, type]) => map.set(type, [...(map.get(type) || []), name]));

  const ans = [...map.values()].reduce((a, c) => a * (c.length + 1), 1) - 1;

  return ans;
}

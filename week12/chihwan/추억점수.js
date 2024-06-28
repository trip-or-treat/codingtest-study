/*
    1. map에 [name, yearn] 형식으로 저장합니다.
    2. photo를 순회하면서 해당 인원들의 그리움 점수들을 합산합니다
    3. 합산한 점수들의 새로운 배열을 출력합니다.
*/

function solution(name, yearning, photo) {
  const map = new Map();
  name.forEach((n, idx) => map.set(n, yearning[idx]));

  const ans = photo.map((p) => {
    const sumScore = p.reduce((a, c) => (a + map.get(c) ? a + map.get(c) : a), 0);
    return sumScore;
  });
  return ans;
}

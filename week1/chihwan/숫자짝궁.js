// 1. X를 순회하면서 map에 담아줍니다.

// 2. Y를 순회하면서 map에 존재하는지 확인 합니다.
// 2-1. map에 존재한다면 ans에 담아주고, map에서 -1해줍니다.
// 2-2. -1을 한 뒤 map의 값이 0이하가 된다면 map에서 제거해줍니다.

// 3-1. ans이 비어있다면 '-1'을 출력
// 3-2. ans이 0으로 구성되어있다면 '0'을 출력
// 3-3. ans을 내림차순으로 정렬하여 문자열로 출력

function solution(X, Y) {
  const ans = [];
  const map = new Map();
  [...X].forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  [...Y].forEach((num) => {
    if (map.has(num)) {
      ans.push(num);
      map.set(num, map.get(num) - 1);
    }

    if (map.get(num) <= 0) map.delete(num);
  });

  if (!ans.length) return '-1';
  if (Number(ans.join('')) === 0) return '0';

  return ans.sort((a, b) => b.localeCompare(a)).join('');
}

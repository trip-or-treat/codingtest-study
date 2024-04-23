/*
    1. X를 순회하면서 map에 값을 담아줍니다.
    
    2. Y를 순회하면서 map에 존재할경우
        2-1. map에 존재할 경우 공통된 숫자이므로 ans에 담아줍니다.
        2-2. map에서 -1을 해줍니다.
        2-3. map에서 값이 0이하가 될 경우 map에서 제거합니다.
    
    3. ans에 값이 없다면 -1을 출력합니다.
    4. 모두 0이라면 0을 출력합니다.
    5. 3,4번의 경우가 아니라면 정렬해서 문자열로 출력합니다.    
*/

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

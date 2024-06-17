/*
  1. 객체형태를 배열형태로 바꿉니다.
  2. JSON.parse를 통해 문자열을 실제 자료구조로 바꿉니다.
  3. 중복제거를 위해 set을 생성합니다.
  4. 배열로 바꾼 배열을 길이를 기준으로 오름차순 정렬합니다.
  5. 짧은 길이부터 set에 숫자를 추가합니다.
  6. 최종 set자료구조를 배열로 바꿔 출력합니다.
*/

function solution(s) {
  const set = new Set();
  const parsed = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']'));

  parsed.sort((a, b) => a.length - b.length);
  parsed.forEach((arr) => arr.forEach((num) => set.add(num)));

  return [...set];
}

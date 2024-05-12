/*
    1. 영어단어로 zero ~ nine까지 구성된 배열을 만들어 줍니다.
    2. 1에서 만든 배열을 순회하면서 문자열 s에 영어로 된 숫자가 포함되어 있다면 모두 index값(숫자)로 바꿔줍니다.
    3. 최종적으로 숫자로 수정된 s를 숫자형태로 바꿔 출력합니다.
*/

function solution(s) {
  const DB = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  DB.forEach((num, idx) => {
    if (s.includes(num)) s = s.replaceAll(num, idx);
  });

  return Number(s);
}

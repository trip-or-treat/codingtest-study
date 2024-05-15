/*
    1. ' '을 기준으로 s를 나눠줍니다.
    2. 1에서 구한 배열을 순회하면서 새로운 배열을 만들어 줍니다.
        2-1. 첫글자가 숫자가 아닌경우 대문자로 바꾸고, 나머지 글자는 소문자로 바꿔 새로운 배열을 반환합니다.
        2-2. 2-1에서 새로만든 배열을 문자열로 바꿔줍니다.
    3. 2에서 구한 배열을 ' '를 기준으로 공백을 띄우고 문자열을 만들어 출력합니다. 
*/

function solution(s) {
  const splited = s.split(' ');

  const mapped = splited.map((word) => {
    const fixed = [...word].map((char, idx) => {
      if (!Number.isInteger(Number(char)) && idx === 0) return char.toUpperCase();
      return char.toLowerCase();
    });
    return fixed.join('');
  });

  return mapped.join(' ');
}

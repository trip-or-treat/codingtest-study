/*
    1. 문자열 s를 순회를 합니다.
        1-1. ans의 마지막값(peek)값이 현재 문자와 같으면 ans에서 제거를 합니다.
        1-2. ans의 마지막값(peek)값이 현재 문자와 다르다면 ans에 push해줍니다.
    2. 최종적으로 ans에 문자가 있다면(제거를 하지 못했다면) 0을, 그렇지 않다면(제거를 했다면) 1을 출력합니다.     
*/

function solution(s) {
  const ans = [];

  [...s].forEach((char) => {
    if (ans[ans.length - 1] === char) ans.pop();
    else ans.push(char);
  });

  return ans.length ? 0 : 1;
}

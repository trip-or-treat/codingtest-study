/*
    1. s의 1개의 단어별로 순회를 합니다.
    2. 현재값이 '(' 문자열인 경우 stack에 담아줍니다.
    3. 만약 Stack의 마지막값이 '(' 이고, 현재값이 ')'이면 stack에서 제거를 해줍니다.
    4. 최종적으로 stack에 값이 있으면 false, 없으면 true를 출력합니다.
*/

function solution(s) {
  const stack = [];

  [...s].forEach((char, idx) => {
    if (idx === 0) stack.push(char);
    else if (stack[stack.length - 1] === '(' && char === ')') stack.pop();
    else stack.push(char);
  });

  return stack[0] ? false : true;
}

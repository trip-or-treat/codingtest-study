/*
    1. dartResult를 순회하면서 숫자인지 문자인지 확인한다.
    
    2. 숫자인 경우 
        2-1. 현재값이 0이고, 이전값이 1이면 넘어간다(return)
        2-2. 현재값이 1이고, 다음값이 0이면 stack에 10을 담아준다.
        2-3. 10이 아닌 나머지 숫자는 stack에 담아준다. 

    3.  문자인경우
        3-1. S인 경우 1배이므로 그냥 넘어간다.
        3-2. D인 경우 stack의 마지막값(현재숫자)을 2배해준다.
        3-3. T인 경우 stack의 마지막값(현재숫자)을 3배해준다.
        3-4. #인 경우 stack의 마지막값(현재숫자)을 -1해준다.
        3-5. *인 경우 stack의 마지막값(현재숫자), 두번째 마지막값을 2배해준다.
    
    4. 최종적으로 stack에 담긴 숫자들을 모두 더해준다.
*/

function solution(dartResult) {
  const stack = [];

  [...dartResult].forEach((char, idx) => {
    if (Number.isInteger(Number(char))) {
      if (char === '0' && dartResult[idx - 1] === '1') return;
      else if (char === '1' && dartResult[idx + 1] === '0') stack.push(10);
      else stack.push(Number(char));
    } else {
      if (char === 'S') return;
      if (char === 'D') stack[stack.length - 1] = stack[stack.length - 1] ** 2;
      if (char === 'T') stack[stack.length - 1] = stack[stack.length - 1] ** 3;
      if (char === '#') stack[stack.length - 1] = stack[stack.length - 1] * -1;
      if (char === '*') {
        stack[stack.length - 1] = stack[stack.length - 1] * 2;
        stack[stack.length - 2] = stack[stack.length - 2] * 2;
      }
    }
  });
  return stack.reduce((a, c) => a + c, 0);
}

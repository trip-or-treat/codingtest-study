/*

    1. ingredient를 순회하면서 stack에 값을 담아줍니다.
    2. stack에서 4개씩 slice로 확인하여 빵-야채-고기-빵(1231) 순서로 되어있다면 4번 pop()해주고, cnt해줍니다.
    3. 총 cnt값을 출력합니다.

*/

function solution(ingredient) {
  const stack = [];
  let cnt = 0;

  ingredient.forEach((num) => {
    stack.push(num);
    if (stack.slice(-4).join('') === '1231') {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      cnt++;
    }
  });

  return cnt;
}

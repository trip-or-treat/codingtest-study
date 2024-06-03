/*
    1. words를 순회하면서 아래의 2조건 중 1개가 일치하는 경우를 찾는다.
        1-1. 새로운 글자의 첫번째 값과, 이전 글자의 마지막값이 다른 경우
        1-2. 이전에 나왔던 글자이거나(includes로 확인)
    2. 조건에 일치하면 [번호, 차례] 순서로 출력합니다.
    3. 조건에 일치하지 않는다면 stack에 단어를 추가해줍니다.
*/

function solution(n, words) {
  const stack = [words[0]];
  const ans = [];

  for (let idx = 1; idx < words.length; idx++) {
    const word = words[idx];
    const lastChar = stack[stack.length - 1].slice(-1);
    const firstChar = word[0];

    if (lastChar !== firstChar || stack.includes(word)) {
      ans.push((idx % n) + 1, Math.floor(idx / n) + 1);
      break;
    }

    stack.push(word);
  }
  return ans.length ? ans : [0, 0];
}

/*
    1. dfs를 통해 str('') 부터 word까지 횟수를 측정합니다.
    2. dfs탈출조건
        1-1. 탈출조건은 str이 word와 같으면 탈출합니다. 이때 ans은 cnt값으로 변경
        1-2. 빠른 속도를 위해 str의 길이가 5라면 탈출합니다. 최대 UUUUU이기 때문
    3. dictionary를 순회하면서 1개씩 str에 더해줍니다.
    4. 최종 ans을 출력합니다.
*/

function solution(word) {
  const dictionary = ['A', 'E', 'I', 'O', 'U'];
  let ans = 0;
  let cnt = 0;

  dfs('');
  return ans;

  function dfs(str) {
    if (str === word) {
      ans = cnt;
      return;
    }

    if (str.length === 5) return;

    for (let i = 0; i < 5; i++) {
      cnt++;
      dfs(str + dictionary[i]);
    }
  }
}

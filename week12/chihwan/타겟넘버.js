/*
    1. dfs를 통해 탈출 조건을 정의합니다.
        1-1. 만약 cnt가 numbers의 길와 같으면 탈출합니다.
        1-2. 탈출 할 때 총 합이 target과 같으면 ans을 count해줍니다.
    2. 반복 조건을 정의합니다.
        2-1. 더하는 경우 : 현재값 + 해당 index의 numbers값을 더합니다. 
        2-2. 빼는 경우 : 현재값 - 해당 index의 numbers값을 빼줍니다.
*/

function solution(numbers, target) {
  let cnt = 0;
  let sum = 0;
  let idx = 0;
  let ans = 0;

  dfs(cnt, sum, idx);

  return ans;

  function dfs(cnt, sum, idx) {
    if (cnt === numbers.length) {
      if (sum === target) ans++;
      return;
    }

    dfs(cnt + 1, sum + numbers[idx], idx + 1);
    dfs(cnt + 1, sum - numbers[idx], idx + 1);
  }
}

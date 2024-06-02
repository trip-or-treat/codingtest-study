/*
    1. 0,1번째 값을 채워줍니다.
    2. 2번째부터 피보나치 계산법(?) 으로 구하면 됨
*/

function solution(n) {
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

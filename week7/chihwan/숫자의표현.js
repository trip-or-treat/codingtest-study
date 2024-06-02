/*
    1. 1부터 n까지 누적합을 계산합니다.
    2. 누적합이 n과 같으면 answer을 +1해줍니다.
    3. 최종적으로 answer를 출력합니다.
*/

function solution(n) {
  let start = 1;
  let answer = 1;

  for (let i = 2; i <= n; i++) {
    let sum = 0;
    while (sum < n) {
      sum += start;
      start++;
      if (sum === n) answer++;
    }
    start = i;
  }
  return answer;
}

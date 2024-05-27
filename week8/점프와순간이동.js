/*
    1. n부터 시작하여 0까지 역순으로 n이 0이하가 될때까지 반복합니다.
        1-1. n이 2로 나눠진다면 n을 2로 나눠줍니다
        1-2. n이 2로 나누어지지 않는다면 n을 -1해주고, ans을 +1해줍니다.
    2. 최종적으로 ans을 출력합니다.    
*/

function solution(n) {
  let end = n;
  let ans = 0;

  while (end > 0) {
    if (end % 2 === 0) end /= 2;
    else {
      end -= 1;
      ans++;
    }
  }
  return ans;
}

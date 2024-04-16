// 1. s의 길이만큼 반복합니다.

// 1-1. s의 0번째 문자부터 다른 문자가 나올때까지 비교해서 첫 글자와 다른문자의 개수가 같다면 slice로 짤라 업데이트합니다.
// 1-1-1. 단 이때 cnt가 0보다 크면서, idx가 s의 길이를 넘어서지 않다면 비교해줍니다.

// 1-2. 업데이트 했다면 count+1을 해줍니다.

// 2. 총 count값을 출력합니다.

function splited(s) {
  let cnt = 1;
  let idx = 1;
  const target = s[0];

  while (cnt > 0 && idx < s.length) {
    if (s[idx] !== target) cnt--;
    else cnt++;

    idx++;
  }

  return s.slice(idx);
}

function solution(s) {
  let ans = 0;
  while (s.length) {
    s = splited(s);
    ans++;
  }

  return ans;
}

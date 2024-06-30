/*
    1. m*t만큼 i를 순회하면서 n진수로 변환하여 문자열(totalStr)을 만들어줍니다.
    2. 만들어둔 문자열(totalStr)을 순회하면서 자신의 차례가 되는경우 해당 숫자를 ans에 추가하여 출력합니다.
        2-1. 자신의 차례 : (i%m === p-1)
*/

function solution(n, t, m, p) {
  let totalStr = '';
  let ans = '';

  for (let i = 0; i <= m * t; i++) {
    totalStr += i.toString(n);
  }

  [...totalStr].forEach((num, i) => {
    if (i % m === p - 1) ans += num;
  });

  return ans.slice(0, t).toUpperCase();
}

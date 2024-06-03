/*
    1. 최대 공약수를 구합니다.
    2. n개의 숫자를 2개씩 비교해서 최소공배수를 만들어줍니다.
        2-1. 최소공배수 : 두수의곱 / 최대공약수
    3. n개 수의 최소공배수를 출력합니다.
*/

function solution(arr) {
  let ans = 1;

  arr.forEach((num) => (ans = (num * ans) / gcd(num, ans)));

  return ans;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

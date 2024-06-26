/*
    1. n을 k진수로 바꾼다.
    2. 조건에 맞는 변환된 수 중 소수의 개수를 찾는다.
*/

function solution(n, k) {
  const changed = n.toString(k);
  const splited = changed.split('0');

  return splited.filter((num) => findSosu(num)).length;
}

function findSosu(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

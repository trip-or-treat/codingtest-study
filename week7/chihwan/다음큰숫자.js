/*
    1. n을 2진수로 변환했을 때 1의 갯수를 찾습니다.
    2. n부터 시작하여 아래의 조건에 맞는 다음 큰 숫자를 찾습니다.
        2-1.  n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
*/

function solution(n) {
  const ans = getBinaryOneCount(n);
  let target = n;

  while (true) {
    target++;
    const targetBinaryOneCount = getBinaryOneCount(target);
    if (targetBinaryOneCount === ans) return target;
  }
}

function getBinaryOneCount(num) {
  const binary = num.toString(2);
  return binary.replaceAll('0', '').length;
}

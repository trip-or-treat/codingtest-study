/*
    1. x의 모든 0을 제거합니다.
    2. 0을 제거하기 전 길이와, 제거 후 길이의 차이를 deletedZeroCnt에 추가해줍니다.
    3. 0을 제거한 후 문자열을 2진법으로 바꿔줍니다.
    4. 총 진행된 횟수(cnt)를 +1 해줍니다.
    5. s가 "1"이 될 때까지 계속해서 반복합니다.
    6. 최종적으로 [0이 제거된 개수, 총 진행된 횟수] 를 출력 합니다.
*/

function solution(s) {
  let deletedZeroCnt = 0;
  let cnt = 0;

  while (s !== '1') {
    const beforeS = s;
    const afterS = s.replaceAll(0, '');
    const x = afterS.length;
    s = x.toString(2);
    deletedZeroCnt += beforeS.length - afterS.length;
    cnt++;
  }

  return [cnt, deletedZeroCnt];
}

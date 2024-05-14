/*
    1. A를 오름차순으로 정렬한 새로운 ascA를 만들어 줍니다.
    2. B를 내림차순으로 정렬한 새로운 descB를 만들어 줍니다.
    3. ascA, descB를 같은 index끼리 곱해줍니다.
*/

function solution(A, B) {
  const ascA = [...A].sort((a, b) => a - b);
  const descB = [...B].sort((a, b) => b - a);
  const sumed = ascA.reduce((a, c, idx) => a + c * descB[idx], 0);

  return sumed;
}

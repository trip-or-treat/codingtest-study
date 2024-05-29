/*
    예시
    -> 1,15가 붙는 경우 
    - 12 34 56 78 910 1112 1314 1516 -> 1
    - [1,3]  [5,7] [9,11] [13.15] -> 2
    - [1,5] [9,15] -> 3
    - [1.15] -> 4

    1. 위의 경우에 따르면 a,b를 2로 나눠 올림하여 반복해주고, count한다.
    2. a,b가 같아지는 경우 count값을 출력한다.
*/

function solution(n, a, b) {
  let cnt = 0;

  while (true) {
    cnt++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    if (a === b) return cnt;
  }
}

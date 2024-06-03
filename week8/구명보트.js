/*
    1. people 배열을 오름차순으로 정렬합니다.
    2. 맨왼쪽, 맨오른쪽 index에서 2개의 포인터가 시작됩니다.
    3. 각 포인터가 가리키는 무게를 더해서 limit보다 크다면 오른쪽 포인터를 왼쪽으로 이동
    4. limit이하라면 왼쪽, 오른쪽 모두 반대편으로 1칸씩 이동
    5. 만약 왼쪽, 오른쪽 포인터가 만난다면 종료 
    6. 움직일때마다 cnt를 하여, 총 cnt값을 출력
*/

function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let cnt = 0;

  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] > limit) right--;
    else if (people[left] + people[right] <= limit) {
      left++;
      right--;
    }
    cnt++;
  }

  return cnt;
}

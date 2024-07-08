/*
    1. 중복을 제거하기 위해 set을 만들어줍니다.
    2. 2중 for문을 순회하면서 2개의 값을 더해 set에 담아줍니다.
    3. set을 배열로 만든 뒤, 오름차순으로 정렬해서 출력합니다.
*/

function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      set.add(sum);
    }
  }
  return [...set].sort((a, b) => a - b);
}

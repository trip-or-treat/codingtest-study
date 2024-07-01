// 1월1일은 금요일

/*
    1. date배열을 만들어 모든 일자를 담아줍니다. 
    2. a월 b일의 총 일수를 계산합니다.
    3. 총일수를 7로 나누고, date에서 요일을 가져옵니다.
*/

function solution(a, b) {
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let sumDate = 0;

  for (let i = 1; i < a; i++) {
    sumDate += days[i];
  }

  return date[(sumDate + b) % 7];
}

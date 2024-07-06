/*
    1. phone_number의 뒤에서 4자리를 기억해둡니다.
    2. phone_number의 4자리 빼고 나머지 길이만큼 *를 만들어줍니다.
    3. 2와 1을 더해 출력합니다.
*/

function solution(phone_number) {
  const lastFourNumbers = phone_number.slice(-4);
  const result = '*'.repeat(phone_number.length - 4);

  return result + lastFourNumbers;
}

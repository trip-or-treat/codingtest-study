/*
    1. 오름차순으로 정렬해줍니다.
    2. 0번째 값을 prev 변수에 담아줍니다.
    3. for문을 통해 1번째부터 순회합니다.
        3-1. 현재값을 찾아줍니다 phone_book[i];
        3-2. 현재값이 이전값으로 시작한다면 false를 출력합니다.
        3-3. 현재값이 이전값으로 시작하지 않는다면 현재값을 이전값으로 바꿔줍니다. prev= cur
    4. false를 출력하지 않았다면 true를 출력합니다.    
*/

function solution(phone_book) {
  phone_book.sort();
  let prev = phone_book[0];

  for (let i = 1; i < phone_book.length; i++) {
    const cur = phone_book[i];
    if (cur.startsWith(prev)) return false;
    prev = cur;
  }

  return true;
}

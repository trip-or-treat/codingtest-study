const solution = (array, n) => {
  return array.filter((x) => x === n).length;
};

// array.filter(함수) : 함수의 조건에 true인 요소만 필터링해서 새로운 배열로 반환
// 콜백 함수의 인자는 배열의 요소들이고, 결과는 true or false이다.
// 전달인자가 하나일 때 괄호를 벗겨도 된다.
// 같은지 비교할 때 ==은 값이 같은지 비교, ===은 값과 type이 같은지 비교
// NaN은 자기 자신 포함 어떤 것과도 같지 않다. ex) NaN === NaN : false

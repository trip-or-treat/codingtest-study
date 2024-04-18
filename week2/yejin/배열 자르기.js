const solution = (numbers, num1, num2) => {
  return numbers.slice(num1, num2 + 1);
};

// 문자열 자르기
// substr(startIdx, length)
// substring(startIdx, endIdx) : startIdx+1부터 endIdx까지 리턴

// 배열 자르기
// slice(startIdx, endIdx) : startIdx부터 endIdx-1까지 리턴
// endIdx를 생략하면 배열의 길이가 들어감

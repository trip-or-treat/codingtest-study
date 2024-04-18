const solution = (my_string, n) => {
  return [...my_string].map((x) => x.repeat(n)).join("");
};

// 스프레드 연산자: [...arr]
// 반복 가능한 배열, 객체, 문자열 등을 풀어헤쳐서 배열로 만듦.

// arr.repeat(n) : 배열을 n번 반복함

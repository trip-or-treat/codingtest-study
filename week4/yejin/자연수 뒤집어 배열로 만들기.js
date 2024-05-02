// 문자열로 풀기
// const solution = (n) => {
//     return n.toString().split('').reverse().map(x => x*1);
// }

// 배열로 풀기
const solution = (n) => {
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.trunc(n / 10);
  } while (n > 0);

  return arr;
};

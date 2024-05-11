function solution(n) {
  var x = Math.sqrt(n);
  return Number.isInteger(x) ? (x + 1) ** 2 : -1;
}

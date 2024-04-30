function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

let strings = ["abce", "abcd", "cdx"];
let n = 2;

console.log(solution(strings, n));

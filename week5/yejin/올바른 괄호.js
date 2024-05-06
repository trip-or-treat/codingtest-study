function solution(s) {
  var count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
    if (count < 0) return false;
  }

  return count == 0 ? true : false;
}

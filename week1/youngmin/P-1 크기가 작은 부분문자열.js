function solution(t, p) {
  const cutLength = p.length;
  const substrings = t
    .split("")
    .map(
      (_, idx) => idx <= t.length - cutLength && t.slice(idx, idx + cutLength)
    );

  return substrings.filter((num) => num <= p && num !== false).length;
}

let t = "3141592";
let p = "271";

console.log(solution(t, p));

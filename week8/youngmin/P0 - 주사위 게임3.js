function solution(a, b, c, d) {
  const list = [a, b, c, d];
  const map = new Map();
  let sum = [];

  list.forEach((el) =>
    map.get(el) === undefined ? map.set(el, 1) : map.set(el, map.get(el) + 1)
  );

  for (let [k, v] of map) {
    if (v === 3) {
      sum.push("세 주사위 같음");
      sum.push(k * 10);
      continue;
    }
    if (v === 2 && map.size === 3) {
      sum.push("두개 다른 값");
      continue;
    }
    sum.push(k);
  }

  sum.sort();

  if (sum.length === 1) return 1111 * sum[0];
  if (sum.length === 3 && sum.includes("세 주사위 같음")) {
    return (10 * (sum[1] / 10) + sum[0]) ** 2;
  }
  if (sum.length === 3) {
    return sum[0] * sum[1];
  }
  if (sum.length === 2) return Math.abs((sum[0] + sum[1]) * (sum[0] - sum[1]));
  if (sum.length === 4) return Math.min(...sum);
}

let a = 4;
let b = 1;
let c = 4;
let d = 4;

console.log(solution(a, b, c, d));

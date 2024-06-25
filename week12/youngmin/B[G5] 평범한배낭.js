// 여행에 필요하다고 생각하는 N 개의 물건
// 무게 W와 가치 V 최대 K만큼의 무게
// 가치의 최대값  => k 만큼의 무개에서 제일 가치가 높은 최댓값
// dp
//"/dev/stdin"

const fs = require("fs");
const input = fs
  .readFileSync("JavaScript/G/aa.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map((item) => Number(item)));
const [n, k] = input.shift();

const arr = Array.from({ length: n + 1 }, () =>
  Array.from({ length: k + 1 }).fill(0)
);

for (let i = 1; i < input.length + 1; i += 1) {
  const [w, v] = input[i - 1];

  for (let j = 1; j < k + 1; j += 1) {
    j - w >= 0
      ? (arr[i][j] = Math.max(arr[i - 1][j - w] + v, arr[i - 1][j]))
      : (arr[i][j] = arr[i - 1][j]);
  }
}

console.log(arr[n][k]);

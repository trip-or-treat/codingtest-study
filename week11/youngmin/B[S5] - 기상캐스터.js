const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [H, W] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.trim().split(""));
let answer = Array.from(Array(H), () => Array(W).fill(0));

for (let i = 0; i < H; i += 1) {
  let pos = -1;
  for (let j = 0; j < W; j += 1) {
    if (map[i][j] == "c") {
      pos = j;
    }
    answer[i][j] = pos === -1 ? -1 : j - pos;
  }
}

console.log(answer.map((v) => v.join(" ")).join("\n"));

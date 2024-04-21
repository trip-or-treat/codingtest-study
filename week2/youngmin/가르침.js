let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);

K -= 5;

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

let alpha = new Array(26).fill(0);
alpha[0] = 1;
alpha[2] = 1;
alpha[8] = 1;
alpha[13] = 1;
alpha[19] = 1;

let max = 0;

const comb = (cur, alphaCount) => {
  if (alphaCount === 0) {
    let count = 0;
    arr.forEach((word) => {
      let flag = true;
      for (let c of word) {
        if (!alpha[c.charCodeAt() - 97]) {
          flag = false;
          break;
        }
      }
      if (flag) count++;
    });

    if (count > max) max = count;
    return;
  }
  for (let i = cur; i < 26; i++) {
    if (alpha[i] === 0) {
      alpha[i] = 1;
      comb(i, alphaCount - 1);
      alpha[i] = 0;
    }
  }
};

comb(0, K);

console.log(max);

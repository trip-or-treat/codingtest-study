const fs = require("fs");
const input = fs
  .readFileSync("JavaScript/test.txt")
  .toString()
  .trim()
  .split("\n");

const [f, c] = input.map((el) => Number(el));
let answer = 0;

switch (f) {
  case 1:
    answer += 8 * c;
    break;
  case 5:
    answer += 4 + 8 * c;
    break;
  default:
    answer += 4 * c + 1;
    c % 2 === 0 ? (answer += f - 2) : (answer += 4 - f);
    break;
}

console.log(answer);

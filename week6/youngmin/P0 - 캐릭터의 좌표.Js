function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [maxX, maxY] = board.map((postion) => Math.floor(postion / 2));
  const xList = keyinput.filter((key) => key === "left" || key === "right");
  const yList = keyinput.filter((key) => key === "up" || key === "down");

  xList.forEach((key) => {
    const postion = key === "left" ? x - 1 : x + 1;
    if (Math.abs(postion) <= maxX) x = postion;
  });

  yList.forEach((key) => {
    const postion = key === "down" ? y - 1 : y + 1;
    if (Math.abs(postion) <= maxY) y = postion;
  });

  return [x, y];
}

let keyinput = ["right", "right", "right", "right", "right", "left"];
let board = [9, 5];

console.log(solution(keyinput, board));

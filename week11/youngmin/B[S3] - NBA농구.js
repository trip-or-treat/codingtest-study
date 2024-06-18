const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

function soution() {
  let totalTime = setTime("48:00");
  const table = input.map((time) => time.split(" "));
  let [one, two, oneTime, twoTime, pervTime] = [0, 0, 0, 0, 0];

  for (let i = 0; i < table.length; i += 1) {
    let [curTeam, time] = table[i];
    time = setTime(time);

    if (one > two) oneTime += time - pervTime;
    if (two > one) twoTime += time - pervTime;

    curTeam === "1" ? (one += 1) : (two += 1);

    pervTime = time;
  }

  if (one > two) oneTime += totalTime - pervTime;
  if (two > one) twoTime += totalTime - pervTime;

  console.log(formatTime(oneTime));
  console.log(formatTime(twoTime));
}

const setTime = (timeStr) => {
  const [hour, min] = timeStr.split(":");
  return Number(hour) * 60 + Number(min);
};

const formatTime = (time) => {
  const hour = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);
  const min = (time % 60).toString().padStart(2, 0);

  return `${hour}:${min}`;
};

soution();

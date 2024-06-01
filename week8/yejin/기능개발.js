function solution(progresses, speeds) {
  let answer = [];

  let count = 1;

  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  let length = progresses.length;

  for (let i = 1, j = 0; i < length; i++) {
    if (days[i] > maxDay) {
      answer[j++] = count;
      count = 1;
      maxDay = days[i];
    } else count++;

    if (i == length - 1) answer[j] = count;
  }

  return answer;
}

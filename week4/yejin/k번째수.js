function solution(array, commands) {
  let answer = [];
  let length = commands.length;

  for (let i = 0; i < length; i++) {
    answer[i] = func(array, commands[i]);
  }

  return answer;
}

function func(array, commands) {
  let result = [];

  result = array.slice(commands[0] - 1, commands[1]).sort((a, b) => a - b);

  return result[commands[2] - 1];
}

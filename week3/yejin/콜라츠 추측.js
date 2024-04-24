// 재귀
const solution = (num) => {
  let answer = 0;
  let count = 0;

  if (num == 1) return 0;

  answer = func(num, count);

  return answer;
};

const func = (num, count) => {
  let cal_result = 0;

  num % 2 == 0 ? (cal_result = num / 2) : (cal_result = num * 3 + 1);
  count++;

  if (cal_result != 1 && count > 500) return (count = -1);
  else if (cal_result == 1 && count <= 500) return count;

  return func(cal_result, count);
};

// while 문 이용
const solution2 = (num, count = 0) => {
  while (num != 1 && count <= 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }

  return num == 1 ? (count <= 500 ? count : 0) : -1;
};

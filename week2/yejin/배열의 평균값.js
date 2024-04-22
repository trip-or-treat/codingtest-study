const solution = (numbers) => {
  let answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
  return answer;
};

// reduce 함수
// array.reduce(())

function solution(numbers) {
  let dupArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      dupArr.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(dupArr);

  const answer = [...set];

  return answer.sort((a, b) => a - b);
}

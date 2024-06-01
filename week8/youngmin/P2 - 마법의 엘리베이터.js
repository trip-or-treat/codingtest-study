function solution(storey) {
  let answer = 0;
  let list = storey
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));

  list.forEach((num, index) => {
    const max = 10;
    if (num === 5) {
      // 5인경우 뒷자리가 5이상이면 자릿수 높임 똑같이 적용 그렇지않거나 없다면 그냥 더하기
      if (list[index + 1] < 5 || list[index + 1] === undefined) answer += num;
      if (list[index + 1] >= 5) {
        list[index + 1] += 1;
        answer += num;
      }
    }
    if (num > 5) {
      answer += max - num;
      list[index + 1] ? (list[index + 1] += 1) : (answer += 1);
    }
    if (num < 5) answer += num;
  });

  return answer;
}

let storey = 545;

console.log(solution(storey));

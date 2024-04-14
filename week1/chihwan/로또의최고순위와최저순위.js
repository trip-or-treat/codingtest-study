// 1. lottos에서 0의 개수를 파악한다.
// 2. lotto와 win_nums에서 공통숫자를 찾는다.(set의 has를 통해 빠르게 찾음)
// 3. 맞춘 개수에 따라 순위를 출력한다.

function solution(lottos, win_nums) {
  const DB = [6, 6, 5, 4, 3, 2, 1];

  const lottoSet = new Set(lottos);
  const zeroCnt = lottos.filter((num) => num === 0).length;
  let matchCnt = 0;

  win_nums.forEach((number) => {
    if (lottoSet.has(number)) matchCnt++;
  });

  const min = matchCnt;
  const max = matchCnt + zeroCnt;
  const result = [DB[max], DB[min]];

  return result;
}

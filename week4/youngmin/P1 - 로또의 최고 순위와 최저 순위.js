function solution(lottos, win_nums) {
  const list = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

  const hit = lottos.filter((num) => win_nums.includes(num)).length;
  const empty = lottos.filter((num) => num === 0).length;

  return [list[hit + empty], list[hit]];
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));

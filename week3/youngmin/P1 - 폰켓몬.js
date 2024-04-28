function solution(nums) {
  const cut = nums.length / 2;

  const list = new Set(nums);

  return list.size <= cut ? list.size : cut;
}

let nums = [3, 1, 2, 3];

console.log(solution(nums));

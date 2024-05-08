/*
    1. 1번, 2번, 3번 수포자 문제 찍는 방식을 상수화 한다.
    2. answer를 순회하면서 1,2,3번 수포자의 정답을 체크한다.
    3. 정답을 맞춘 사람 중 최대값을 찾는다.
    4. 최대값을 맞춘 사람을 출력한다.
*/

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ans = [0, 0, 0];

  answers.forEach((num, idx) => {
    if (num === first[idx % first.length]) ans[0]++;
    if (num === second[idx % second.length]) ans[1]++;
    if (num === third[idx % third.length]) ans[2]++;
  });

  const max = Math.max(...ans);

  return ans
    .map((num, idx) => (num === max ? idx + 1 : 0))
    .filter((num) => num)
    .sort();
}

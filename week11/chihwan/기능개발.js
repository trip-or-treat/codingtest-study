/*
    1. 작업 능력(100-progess / spped[idx])을 계산해서 매핑해줍니다.
    2. 매핑된 값 1번째부터 비교해서 배포 개수를 ans에 담아 출력합니다.
        2-1. 최대개수가 현재 능력의 이상이면 cnt를 +1해줍니다.
        2-2. 최대개수가 현재능력보다 작다면 최대개수를 업데이트하고, ans에 cnt를 담고, cnt를 1로 초기화 해줍니다.
*/

function solution(progresses, speeds) {
  const mapped = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  const ans = [];
  let cnt = 1;
  let max = mapped[0];

  mapped.slice(1).forEach((cur) => {
    if (max >= cur) {
      cnt++;
    }

    if (max < cur) {
      max = cur;
      ans.push(cnt);
      cnt = 1;
    }
  });

  ans.push(cnt);
  return ans;
}

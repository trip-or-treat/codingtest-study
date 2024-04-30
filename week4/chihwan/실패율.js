/*
    1. 실패율을 구한다.
        1-1. 스테이지에 도달했지만, 클리어 하지 못한 플레이어 수
        1-2. 스테이지에 도달한 플레이어 수

    2. [실패율,stage] 형식으로 배열에 담아준다.

    3. 2에서 만든 배열을 실패율을 기준으로 내림차순 정렬한다.
    
    4. 정렬된 배열을 stage값만 매핑하여 출력한다.
*/

function solution(N, stages) {
  const ans = [];

  for (let i = 1; i <= N; i++) {
    const onStageNotClear = stages.filter((stage) => stage === i).length;
    const onStage = stages.filter((stage) => stage >= i).length;
    ans.push([onStageNotClear / onStage, i]);
  }

  ans.sort((a, b) => b[0] - a[0]);

  return ans.map(([_, stage]) => stage);
}
